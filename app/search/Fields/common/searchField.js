"use strict";

const BaseObject = require("../../../baseObject");

class SearchField extends BaseObject {

    constructor() {
        super();
        this.field = undefined;
        this.operator = undefined;
        this.searchValue = undefined;
    }

    _getSoapType() {
        return `platformCommon:${this.field}`;
    }

    _getAttributes() {
        return {
            "operator": this.operator,
            "xsi:type": `${this._type}:${this._name}`,
        };
    }

    getNode() {

        const attributes = this._getAttributes();
        const type = this._getSoapType();

        if (!type) {
            throw new Error(`Invalid SOAP type ${type}`);
        }

        if (!this.field) {
            throw new Error("search criteria field not set");
        }

        if (!this.operator) {
            throw new Error("search criteria operator not set");
        }

        if (!this.searchValue) {
            throw new Error("search criteria searchValue not set");
        }

        const node = {};

        node[type] = {};

        if (attributes) {
            node[type]["$attributes"] = attributes;
        }

        node[type]["platformCore:searchValue"] = {};
        node[type]["platformCore:searchValue"]["$attributes"] = {};
        node[type]["platformCore:searchValue"]["$value"] = this.searchValue;

        return node;
    }
}

module.exports = SearchField;
