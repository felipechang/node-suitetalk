"use strict";

const BaseObject = require("../baseObject");

class SearchPreferences extends BaseObject {

    constructor() {
        super();
        this.pageSize = undefined;
        this.bodyFieldsOnly = undefined;
        this.returnSearchColumns = undefined;
    }

    _getSoapType() {
        return "searchPreferences";
    }

    _getAttributes() {
        return {
            "xsi:type": "SearchPreferences",
        };
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

        if(this.pageSize !== undefined){
            node[type].pageSize = this.pageSize;
        }

        if(this.bodyFieldsOnly !== undefined){
            node[type].bodyFieldsOnly = this.bodyFieldsOnly;
        }

        if(this.returnSearchColumns !== undefined){
            node[type].returnSearchColumns = this.returnSearchColumns;
        }

        return node;
    }
}

module.exports = SearchPreferences;
