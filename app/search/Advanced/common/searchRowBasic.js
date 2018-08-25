"use strict";

const BaseObject = require("../../../baseObject");

class SearchRowBasic extends BaseObject {

    constructor() {
        super();
        this.searchColumnFields = [];
        this.searchCriteriaFields = [];
    }

    _getSoapType() {
        return `${this._type}:basic`;
    }

    _getAttributes() {
        return "";
    }

    getNode() {

        const attributes = this._getAttributes();
        const type = this._getSoapType();

        if (!type) {
            throw new Error(`Invalid SOAP type ${type}`);
        }

        if (this.searchColumnFields.length === 0 && this.searchCriteriaFields.length === 0) {
            throw new Error("No search columns or criteria have been defined");
        }

        const node = {};

        node[type] = {};

        if (attributes) {
            node[type]["$attributes"] = attributes;
        }

        this.searchColumnFields.forEach((el) => {
            Object.assign(node[type], el.getNode());
        });

        this.searchCriteriaFields.forEach((el) => {
            Object.assign(node[type], el.getNode());
        });

        return node;
    }
}

module.exports = SearchRowBasic;
