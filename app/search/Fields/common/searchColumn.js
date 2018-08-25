"use strict";

const BaseObject = require("../../../baseObject");

class SearchColumn extends BaseObject {

    constructor() {
        super();
        this.field = "";
    }

    _getSoapType() {
        return `platformCommon:${this.field}`;
    }

    _getAttributes() {
        return {
            "xsi:type": `${this._type}:${this._name}`,
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

        return node;
    }
}

module.exports = SearchColumn;
