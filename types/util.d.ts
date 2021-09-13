export = Util;
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
declare class Util {
    /**
     * Create WSDL for the provided path
     * @param {IResolveOptions} options
     * @param {Function} cb
     */
    downloadWsdlToFolder(options: IResolveOptions, cb: Function): void;
    /**
     * Query NetSuite for user login option
     * @param {ICredentials} credentials
     * @param {Function} callback
     */
    getLoginOptions(credentials: ICredentials, callback: Function): void;
}
declare namespace Util {
    export { ICredentials, IToken, IConfigurationObject, IResolveOptions };
}
type IResolveOptions = {
    apiVersion: string;
    wsdlFolderPath?: string;
};
type ICredentials = {
    email: string;
    password: string;
    role?: string;
    applicationId?: string;
};
type IToken = {
    consumer_key: string;
    consumer_secret: string;
    token_key: string;
    token_secret: string;
};
type IConfigurationObject = {
    account: string;
    apiVersion: string;
    credentials?: ICredentials;
    token?: IToken;
    wsdlPath: string;
};
