"use strict";

const BaseObject = require("../../baseObject");

class NullFieldList extends BaseObject {

    constructor() {
        super();
        this.names = [];
    }

    _getSoapType() {
        return "nullFieldList";
    }

    _getAttributes() {
        return {
            "xsi:type": "platformCore:NullField"
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

        const xml = [];

        // Node soap is not friendly to arrays. Outputs as object.
        this.names.forEach((value) => {
            xml.push("<platformCore:name>");
            xml.push(value);
            xml.push("</platformCore:name>");
        });

        node[type]["$xml"] = xml.join("");


        return node;
    }
}

module.exports = NullFieldList;
