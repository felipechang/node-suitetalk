"use strict";

const _ = require("lodash");
const crypto = require("crypto");
const path = require("path");
const soap = require("soap");
const BaseObject = require("./baseObject");

/**
 * @typedef {Object} ICredentials
 * @property {string} email
 * @property {string} password
 * @property {string} [role]
 * @property {string} [applicationId]
 */

/**
 * @typedef {Object} IToken
 * @property {string} consumer_key
 * @property {string} consumer_secret
 * @property {string} token_key
 * @property {string} token_secret
 */

/**
 * @typedef {Object} IConfigurationObject
 * @property {string} account
 * @property {string} apiVersion
 * @property {ICredentials} [credentials]
 * @property {IToken} [token]
 * @property {string} wsdlPath
 */

/**
 * Validate configuration object
 * @param {IConfigurationObject} configuration
 * @private
 */
function _validateConfiguration(configuration) {

    // NetSuite account
    if (!configuration.account) {
        throw new Error("account is a required - NetSuite account number ex. 12345");
    }

    // API version
    if (!configuration.apiVersion) {
        throw new Error("apiVersion is required - NetSuite endpoint version ex. 2018_1");
    }

    // Path to WSDL
    if (!configuration.wsdlPath) {
        throw new Error("wsdlPath is a required - Path to netsuite.wsdl");
    }

    if (!configuration.credentials && !configuration.token) {
        throw new Error("Must include either token or credentials object");
    }

    // Credentials
    if (configuration.credentials) {
        if (!configuration.credentials.email) {
            throw new Error("credentials email is a required property");
        }
        if (!configuration.credentials.password) {
            throw new Error("credentials password is a required property");
        }
    }

    // Token
    if (configuration.token) {
        if (!configuration.token.consumer_key) {
            throw new Error("token consumer_key is a required property");
        }
        if (!configuration.token.consumer_secret) {
            throw new Error("token consumer_secret is a required property");
        }
        if (!configuration.token.token_key) {
            throw new Error("token token_key is a required property");
        }
        if (!configuration.token.token_secret) {
            throw new Error("token token_secret is a required property");
        }
    }
}

/**
 * @typedef {Object} INameSpaces
 * @property {string} actSched
 * @property {string} fileCabinet
 * @property {string} listAcct
 * @property {string} listEmp
 * @property {string} listMkt
 * @property {string} listRel
 * @property {string} listSupport
 * @property {string} listWebsite
 * @property {string} platformCommon
 * @property {string} platformCore
 * @property {string} platformMsgs
 * @property {string} setupCustom
 * @property {string} tranBank
 * @property {string} tranCust
 * @property {string} tranGeneral
 * @property {string} tranInvt
 * @property {string} tranSales
 */

/**
 * Namespaces to be added to the SOAP header
 * @param {IConfigurationObject} configuration
 * @return {INameSpaces}
 */
function _getNameSpaces(configuration) {
    return {
        actSched: `urn:scheduling_${configuration.apiVersion}.activities.webservices.netsuite.com`,
        fileCabinet: `urn:filecabinet_${configuration.apiVersion}.documents.webservices.netsuite.com`,
        listAcct: `urn:accounting_${configuration.apiVersion}.lists.webservices.netsuite.com`,
        listEmp: `urn:employees_${configuration.apiVersion}.lists.webservices.netsuite.com`,
        listMkt: `urn:marketing_${configuration.apiVersion}.lists.webservices.netsuite.com`,
        listRel: `urn:relationships_${configuration.apiVersion}.lists.webservices.netsuite.com`,
        listSupport: `urn:support_${configuration.apiVersion}.lists.webservices.netsuite.com`,
        listWebsite: `urn:website_${configuration.apiVersion}.lists.webservices.netsuite.com`,
        platformCommon: `urn:common_${configuration.apiVersion}.platform.webservices.netsuite.com`,
        platformCore: `urn:core_${configuration.apiVersion}.platform.webservices.netsuite.com`,
        platformMsgs: `urn:messages_${configuration.apiVersion}.platform.webservices.netsuite.com`,
        setupCustom: `urn:customization_${configuration.apiVersion}.setup.webservices.netsuite.com`,
        tranBank: `urn:bank_${configuration.apiVersion}.transactions.webservices.netsuite.com`,
        tranCust: `urn:customers_${configuration.apiVersion}.transactions.webservices.netsuite.com`,
        tranGeneral: `urn:general_${configuration.apiVersion}.transactions.webservices.netsuite.com`,
        tranInvt: `urn:inventory_${configuration.apiVersion}.transactions.webservices.netsuite.com`,
        tranSales: `urn:sales_${configuration.apiVersion}.transactions.webservices.netsuite.com`,
    };
}

/**
 * @typedef {Object} IAuthKeys
 * @property {string} account
 * @property {string} consumerKey
 * @property {string} nonce
 * @property {number} timeStamp
 * @property {string} tokenKey
 * @property {string} base64hash
 */

/**
 * Builds oAuth keys into object
 * @param {IConfigurationObject} configuration
 * @return {IAuthKeys}
 */
function getOAuthKeys(configuration) {
    const res = {};
    res.account = configuration.account;
    res.consumerKey = configuration.token.consumer_key;
    res.tokenKey = configuration.token.token_key;

    res.nonce = Math.random().toString(36).substr(2, 15) +
        Math.random().toString(36).substr(2, 15);

    res.timeStamp = Math.round((new Date()).getTime() / 1000);

    const key = `${configuration.token.consumer_secret}&${configuration.token.token_secret}`;

    const baseString = configuration.account + "&" + configuration.token.consumer_key + "&" +
        configuration.token.token_key + "&" + res.nonce + "&" + res.timeStamp;

    res.base64hash = crypto.createHmac("sha256", Buffer.from(key, "utf8"))
        .update(baseString).digest(null, null).toString("base64");
    return res;
}


/**
 * Returns a NS SOAP authentication header
 * using either header credentials [NL_AUTH]
 * or oauth via consumer/token pairs
 * @param {IConfigurationObject} configuration
 * @return {Object}
 */
function _createAuthHeader(configuration) {

    const soapObj = {};

    if (configuration.credentials) {

        soapObj["platformMsgs:passport"] = {
            "platformCore:account": configuration.account,
            "platformCore:email": configuration.credentials.email,
            "platformCore:password": configuration.credentials.password,
        };

        if (configuration.credentials.role) {
            soapObj["platformMsgs:passport"]["platformCore:role"] = {
                $attributes: {
                    internalId: configuration.credentials.role,
                },
            };
        }

        if (configuration.credentials.applicationId) {
            soapObj["platformMsgs:applicationInfo"] = {
                "platformMsgs:applicationId": configuration.credentials.applicationId,
            };
        }
    }

    if (configuration.token && !configuration.credentials) {

        const o = getOAuthKeys(configuration);

        soapObj["platformMsgs:tokenPassport"] = {
            "platformCore:account": o.account,
            "platformCore:consumerKey": o.consumerKey,
            "platformCore:nonce": o.nonce,
            "platformCore:timestamp": o.timeStamp,
            "platformCore:token": o.tokenKey,
            "platformCore:version": "1.0",
        };

        soapObj["platformMsgs:tokenPassport"]["platformCore:signature"] = {
            $attributes: {
                algorithm: "HMAC_SHA256",
            },
            $value: o.base64hash,
        };
    }

    return soapObj;
}

class Configuration {

    /**
     * Object Constructor
     * @param {IConfigurationObject} configuration
     */
    constructor(configuration) {
        _validateConfiguration(configuration);
        this.configuration = configuration;
    }

    /**
     * Add SOAP header to current client
     * @param {BaseObject} header
     */
    addClientSoapHeader(header) {
        if (!this.client || !this.client.soapHeaders) {
            throw new Error("Client not initialized");
        }
        const soapHeader = header.getNode();
        this.client.addSoapHeader(soapHeader);
    }

    /**
     * Remove SOAP header from current client
     * @param {string} headerName
     */
    removeClientSoapHeader(headerName) {
        if (!this.client || !this.client.soapHeaders) {
            return;
        }

        for (let i = this.client.soapHeaders.length - 1; i >= 0; i--) {
            if (this.client.soapHeaders[i].indexOf(`<${headerName}`) === 0) {
                this.client.soapHeaders.splice(i, 1);
            }
        }
    }

    /**
     * Create node-soap client
     * @return {Promise<any>}
     */
    createConnection() {

        const thisRef = this;

        return new Promise((resolve, reject) => {

            let wsdlPath = thisRef.configuration.wsdlPath;

            if (wsdlPath.indexOf("netsuite.wsdl") === -1) {
                wsdlPath = path.normalize(`${wsdlPath}/netsuite.wsdl`);
            }

            soap.createClientAsync(wsdlPath, {
                attributesKey: "$attributes",
                namespaceArrayElements: false
            }).then((client) => {

                _.assign(client.wsdl.definitions.xmlns, _getNameSpaces(this.configuration));
                client.wsdl.xmlnsInEnvelope = client.wsdl._xmlnsMap();

                const authHeader = _createAuthHeader(thisRef.configuration);
                client.addSoapHeader(authHeader);

                thisRef.client = client;
                resolve(client);
            }).catch((err) => {
                reject(err);
            });
        });
    }
}

module.exports = Configuration;
