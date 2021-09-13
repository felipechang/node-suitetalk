export = Service;
declare class Service {
    /**
     *
     * @param {Configuration} config
     */
    constructor(config: any);
    config: any;
    /**
     * Create connection from configuration object
     * @return {Promise<any>}
     */
    init(): Promise<any>;
    /**
     * Create a record
     * @param {Record} record
     * @return {Promise<any>}
     */
    add(record: any): Promise<any>;
    /**
     * Add a list of records
     * @param {Array} recordArr
     * @return {Promise<any>}
     */
    addList(recordArr: any[]): Promise<any>;
    /**
     * Delete record
     * @param {Record} record
     * @return {Promise<any>}
     */
    delete(record: any): Promise<any>;
    /**
     * Delete list of records
     * @param {Array} recordArr
     * @return {Promise<any>}
     */
    deleteList(recordArr: any[]): Promise<any>;
    /**
     * Get a record from a reference
     * @param {Reference} recordRef
     * @return {Promise<any>}
     */
    get(recordRef: any): Promise<any>;
    /**
     * Get a list of records by reference
     * @param {Array} recordRefArr
     * @return {Promise<any>}
     */
    getList(recordRefArr: any[]): Promise<any>;
    /**
     * Get a list of records by type
     * @param {string} recordType
     * @return {Promise<any>}
     */
    getAll(recordType: string): Promise<any>;
    /**
     *
     * @param {Reference[]} recordRefs
     * @return {Promise<any>}
     */
    getSelectValue(recordRefs: any[]): Promise<any>;
    /**
     * Update a record
     * @param {Record} record
     * @return {Promise<any>}
     */
    update(record: any): Promise<any>;
    /**
     * Add/update a record
     * @param {Record} record
     * @return {Promise<any>}
     */
    upsert(record: any): Promise<any>;
    /**
     * Add/update a list of records
     * @param {Array} recordArr
     * @return {Promise<any>}
     */
    upsertList(recordArr: any[]): Promise<any>;
    /**
     * Perform a record query
     * @param {SearchRecord} searchRecord
     * @return {Promise<any>}
     */
    search(searchRecord: any): Promise<any>;
    /**
     * Perform a record query with a saved search
     * @param {string} searchId
     * @param {number} pageIndex
     * @return {Promise<any>}
     */
    searchMoreWithId(searchId: string, pageIndex: number): Promise<any>;
    /**
     * Set preferences for record query
     * @param {SearchPreferences} preferences
     */
    setSearchPreferences(preferences: any): void;
    /**
     * Clear preferences for record query
     */
    clearSearchPreferences(): void;
    /**
     * Set preferences for the SOAP request
     * @param {RequestPreferences} preferences
     */
    setRequestPreferences(preferences: any): void;
    /**
     * Clear preferences for the SOAP request
     */
    clearRequestPreferences(): void;
}
