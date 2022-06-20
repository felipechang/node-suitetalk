"use strict";

const AdmZip = require("adm-zip");
const agent = require("superagent");
const fs = require("fs");
const https = require("https");
const mkdirp = require("mkdirp");
const path = require("path");


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
 * @typedef {Object} IResolveOptions
 * @property {string} apiVersion
 * @property {string} [wsdlFolderPath]
 */

class Util {

    /**
     * Create WSDL for the provided path
     * @param {IResolveOptions} options
     * @param {Function} cb
     */
    downloadWsdlToFolder(options, cb) {

        if (!options.apiVersion) {
            throw new Error("apiVersion is a required parameter");
        }

        if (!options.wsdlFolderPath) {
            throw new Error("wsdlFolderPath is a required parameter");
        }

        const folderPath = path.normalize(`${options.wsdlFolderPath}/WSDL_v${options.apiVersion}_0`);
        const filePath = `${folderPath}/netsuite.wsdl`;

        const tempZip = `WSDL_v${options.apiVersion}_0.zip`;
        const remotePath = `http://www.netsuite.com/download/${tempZip}`;

        fs.access(folderPath, fs.constants.F_OK, (fErr) => {
            if (!fErr) {
                cb(filePath);
                return;
            }

            mkdirp(folderPath, (dErr) => {
                if (dErr) {
                    throw new Error(dErr.message);
                }

                agent
                    .get(remotePath)
                    .on("error", (gErr) => {
                        throw new Error(gErr.message);
                    })
                    .pipe(fs.createWriteStream(tempZip))
                    .on("finish", () => {

                        const zip = new AdmZip(tempZip);
                        zip.extractAllTo(folderPath, true);
                        fs.unlink(`./${tempZip}`, (uErr) => {
                            if (uErr) {
                                throw new Error(uErr.message);
                            }
                        });

                        cb(filePath);
                    });
            });
        });
    }

    /**
     * Query NetSuite for user login option
     * @param {ICredentials} credentials
     * @param {Function} callback
     */
    getLoginOptions(credentials, callback) {

        if (!credentials.email) {
            throw new Error("email is a required parameter");
        }

        if (!credentials.password) {
            throw new Error("password is a required parameter");
        }

        // Retrieve appropriate service url from NetSuite REST service first
        const authHeader = `NLAuth nlauth_email=${credentials.email}, nlauth_signature=${credentials.password}`;

        https.get({
            headers: {
                Authorization: authHeader,
            },
            hostname: "rest.NetSuite.com",
            path: "/rest/roles",
        }, (res) => {

            const buffer = [];

            res.setEncoding("utf8");

            res.on("data", (chunk) => {
                buffer.push(chunk);
            });

            res.on("end", () => {
                callback(null, JSON.parse(buffer.join("")));
            });
        }).on("error", (err) => {
            callback(err);
        });
    }
}

module.exports = Util;
