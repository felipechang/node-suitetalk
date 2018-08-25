"use strict";

const denodeify = require("denodeify");

/**
 * Check that required parameters are present
 * @param {Service} service
 * @private
 */
function _assertConnection(service) {
    if (!(service && service.config && service.config.client)) {
        throw new Error("NetSuite connection not configured");
    }
}

class Service {

    /**
     *
     * @param {Configuration} config
     */
    constructor(config) {
        this.config = config;
    }

    /**
     * Create connection from configuration object
     * @return {Promise<any>}
     */
    init() {
        return this.config.createConnection();
    }

    /**
     * Create a record
     * @param {Record} record
     * @return {Promise<any>}
     */
    add(record) {
        _assertConnection(this);
        const soapObj = record.getNode();
        const add = denodeify(this.config.client.add);
        return add(soapObj);
    }

    /**
     * Add a list of records
     * @param {Array} recordArr
     * @return {Promise<any>}
     */
    addList(recordArr) {
        _assertConnection(this);
        const soapObj = recordArr.map((record) => {
            return record.getNode();
        });
        const add = denodeify(this.config.client.addList);
        return add(soapObj);
    }

    /**
     * Delete record
     * @param {Record} record
     * @return {Promise<any>}
     */
    delete(record) {
        _assertConnection(this);
        const soapObj = record.getNode();
        const add = denodeify(this.config.client.add);
        return add(soapObj);
    }

    /**
     * Delete list of records
     * @param {Array} recordArr
     * @return {Promise<any>}
     */
    deleteList(recordArr) {
        _assertConnection(this);
        const soapObj = recordArr.map((record) => {
            return record.getNode();
        });
        const add = denodeify(this.config.client.add);
        return add(soapObj);
    }

    /**
     * Get a record from a reference
     * @param {Reference} recordRef
     * @return {Promise<any>}
     */
    get(recordRef) {
        _assertConnection(this);
        const soapObj = recordRef.getNode();
        const get = denodeify(this.config.client.get);
        return get(soapObj);
    }

    /**
     * Get a list of records by reference
     * @param {Array} recordRefArr
     * @return {Promise<any>}
     */
    getList(recordRefArr) {
        _assertConnection(this);
        const soapObj = recordRefArr.map((recordRef) => {
            return recordRef.getNode();
        });
        const getList = denodeify(this.config.client.getList);
        return getList(soapObj);
    }

    /**
     * Get a list of records by type
     * @param {string} recordType
     * @return {Promise<any>}
     */
    getAll(recordType) {
        _assertConnection(this);
        const param = {
            record: {
                recordType,
            },
        };
        const getAll = denodeify(this.config.client.getAll);
        return getAll(param);
    }

    /**
     *
     * @param {Reference[]} recordRefs
     * @return {Promise<any>}
     */
    getSelectValue(recordRefs) {
        _assertConnection(this);
        const soapObj = recordRefs.map((recordRef) => {
            return recordRef.getNode();
        });
        const getList = denodeify(this.config.client.getList);
        return getList(soapObj);
    }

    /**
     * Update a record
     * @param {Record} record
     * @return {Promise<any>}
     */
    update(record) {
        _assertConnection(this);
        const soapObj = record.getNode();
        const update = denodeify(this.config.client.update);
        return update(soapObj);
    }

    /**
     * Add/update a record
     * @param {Record} record
     * @return {Promise<any>}
     */
    upsert(record) {
        _assertConnection(this);
        const soapObj = record.getNode();
        const upsert = denodeify(this.config.client.upsert);
        return upsert(soapObj);
    }

    /**
     * Add/update a list of records
     * @param {Array} recordArr
     * @return {Promise<any>}
     */
    upsertList(recordArr) {
        _assertConnection(this);
        const soapObj = recordArr.map((record) => {
            return record.getNode();
        });
        const upsert = denodeify(this.config.client.upsert);
        return upsert(soapObj);
    }

    /**
     * Perform a record query
     * @param {SearchRecord} searchRecord
     * @return {Promise<any>}
     */
    search(searchRecord) {
        _assertConnection(this);
        const soapObj = searchRecord.getNode();
        const search = denodeify(this.config.client.search);
        return search(soapObj);
    }

    /**
     * Perform a record query with a saved search
     * @param {string} searchId
     * @param {number} pageIndex
     * @return {Promise<any>}
     */
    searchMoreWithId(searchId, pageIndex) {
        _assertConnection(this);
        const searchMoreWithId = denodeify(this.config.client.searchMoreWithId);
        return searchMoreWithId({
            pageIndex,
            searchId,
        });
    }

    /**
     * Set preferences for record query
     * @param {SearchPreferences} preferences
     */
    setSearchPreferences(preferences) {
        this.config.removeClientSoapHeader("searchPreferences");
        this.config.addClientSoapHeader(preferences);
    }

    /**
     * Clear preferences for record query
     */
    clearSearchPreferences() {
        this.config.removeClientSoapHeader("searchPreferences");
    }

    /**
     * Set preferences for the SOAP request
     * @param {RequestPreferences} preferences
     */
    setRequestPreferences(preferences) {
        this.config.removeClientSoapHeader("preferences");
        this.config.addClientSoapHeader(preferences);
    }

    /**
     * Clear preferences for the SOAP request
     */
    clearRequestPreferences() {
        this.config.removeClientSoapHeader("preferences");
    }
}

module.exports = Service;