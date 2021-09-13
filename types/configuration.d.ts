export = Configuration;
declare class Configuration {
    /**
     * Object Constructor
     * @param {IConfigurationObject} configuration
     */
    constructor(configuration: IConfigurationObject);
    configuration: IConfigurationObject;
    /**
     * Add SOAP header to current client
     * @param {BaseObject} header
     */
    addClientSoapHeader(header: BaseObject): void;
    /**
     * Remove SOAP header from current client
     * @param {string} headerName
     */
    removeClientSoapHeader(headerName: string): void;
    /**
     * Create node-soap client
     * @return {Promise<any>}
     */
    createConnection(): Promise<any>;
}
declare namespace Configuration {
    export { ICredentials, IToken, IConfigurationObject, INameSpaces, IAuthKeys };
}
type IConfigurationObject = {
    account: string;
    apiVersion: string;
    accountSpecificUrl: boolean;
    credentials?: ICredentials;
    token?: IToken;
    wsdlPath: string;
};
import BaseObject = require("./baseObject");
type ICredentials = {
    email: string;
    password: string;
    role: string;
    applicationId: string;
};
type IToken = {
    consumer_key: string;
    consumer_secret: string;
    token_key: string;
    token_secret: string;
};
type INameSpaces = {
    actSched: string;
    fileCabinet: string;
    listAcct: string;
    listEmp: string;
    listMkt: string;
    listRel: string;
    listSupport: string;
    listWebsite: string;
    platformCommon: string;
    platformCore: string;
    platformMsgs: string;
    setupCustom: string;
    tranBank: string;
    tranCust: string;
    tranGeneral: string;
    tranInvt: string;
    tranSales: string;
};
type IAuthKeys = {
    account: string;
    consumerKey: string;
    nonce: string;
    timeStamp: number;
    tokenKey: string;
    base64hash: string;
};
