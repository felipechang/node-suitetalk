"use strict";

const SearchRecord = require("../../searchRecord");

class SearchAdvanced extends SearchRecord {

    constructor() {
        super();
        this.criteria = undefined;
        this.columns = undefined;
        this.savedSearchId = null;
        this.savedSearchScriptId = null;
    }

    _getAttributes() {
        const attrs = {
            "savedSearchId": this.savedSearchId,
            "savedSearchScriptId": this.savedSearchScriptId,
            "xsi:type": `${this._type}:${this._name}`,
        };

        if (!attrs.savedSearchId) {
            delete attrs.savedSearchId;
        }
        if (!attrs.savedSearchScriptId) {
            delete attrs.savedSearchScriptId;
        }

        return attrs;
    }

    getNode() {

        const attributes = this._getAttributes();
        const type = this._getSoapType();

        if (!type) {
            throw new Error(`Invalid SOAP type ${type}`);
        }

        const node = {};

        node[type] = {};

        if (attributes) {
            node[type]["$attributes"] = attributes;
        }

        if (this.criteria) {
            this.criteria._rowName = "criteria";
            Object.assign(node[type], this.criteria.getNode());
        }

        if (this.columns) {
            this.columns._rowName = "columns";
            Object.assign(node[type], this.columns.getNode());
        }

        return node;
    }
}

module.exports = SearchAdvanced;
