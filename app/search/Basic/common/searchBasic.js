"use strict";

const SearchRecord = require("../../searchRecord");

class SearchBasic extends SearchRecord {

    constructor() {
        super();
        this.searchFields =[];
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

        this.searchFields.forEach((el) => {
            Object.assign(node[type], el.getNode());
        });

        return node;
    }
}

module.exports = SearchBasic;
