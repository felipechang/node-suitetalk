"use strict";

const BaseObject = require("../../../baseObject");
const Fields = require("../../fields");

class Line extends BaseObject {

    constructor() {
        super();
        this.bodyFieldList = [];
        this.subRecordList = [];
    }

    _getSoapType() {
        return `${this._type}:${this._listName}`;
    }

    _getAttributes() {
        return {
            "xsi:type": `${this._type}:${this._name}`,
        };
    }

    addStringField(fieldName, value) {
        const field = new Fields.StringRef();
        field.field = fieldName;
        field.value = value;
        this.bodyFieldList.push(field);
    }

    addRecordField(type, fieldName, internalId) {
        const field = new Fields.RecordRef();
        field.type = type;
        field.field = fieldName;
        field.internalId = internalId;
        this.bodyFieldList.push(field);
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
                el._type = this._type;
            }
            Object.assign(node[type], el.getNode());
        });

        this.subRecordList.forEach((el) => {
            if (!el._type) {
                el._type = this._type;
            }
            Object.assign(node[type], el.getNode());
        });

        return node;
    }
}

module.exports = Line;
