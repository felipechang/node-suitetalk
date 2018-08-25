"use strict";

const BaseObject = require("../../../baseObject");

class SearchRow extends BaseObject {

    constructor() {
        super();
        this.basic = undefined;
        this._rowName = undefined;
    }

    _getSoapType() {
        return `${this._type}:${this._rowName}`;
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

        if (!this.basic) {
            throw new Error("No basic search row has ben defined");
        }

        if (!this._rowName) {
            throw new Error("No row name has ben defined");
        }

        const node = {};

        node[type] = {};

        if (attributes) {
            node[type]["$attributes"] = attributes;
        }

        Object.assign(node[type], this.basic.getNode());

        return node;
    }
}

module.exports = SearchRow;
