"use strict";

const BaseObject = require("../../../baseObject");
const Fields = require("../../fields");
class SubRecord extends BaseObject {

    constructor() {
        super();
        this._listName = undefined;
        this.bodyFieldList = [];
    }

    addStringField(fieldName, value) {
        if (!fieldName || !value) return;
        const field = new Fields.StringRef();
        field.field = fieldName;
        field.value = value;
        this.bodyFieldList.push(field);
    }

    _getSoapType() {
        return `${this._type}:${this._listName}`;
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

        const node = {};

        node[type] = {};

        if (attributes) {
            node[type]["$attributes"] = attributes;
        }

        this.bodyFieldList.forEach((el) => {
            if (!el._type) {
                el._type = "platformCommon";
            }
            Object.assign(node[type], el.getNode());
        });

        return node;
    }
}

module.exports = SubRecord;
