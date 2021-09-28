"use strict";

const BaseObject = require("../../baseObject");

class RecordRef extends BaseObject {

    constructor() {
        super();
        this.type = undefined;
        this.internalId = undefined;
        this.externalId = undefined;
    }

    static build(type, fieldName, internalId, {_type, _name} = {}) {
        const field = new RecordRef();
        field.type = type;
        field.field = fieldName;
        field.internalId = internalId;

        if (_type) field._type = _type;
        if (_name) field._name = _name;

        return field;
    }

    _getSoapType() {
        return `${this._type}:${this.field}`;
    }

    _getAttributes() {

        const attr = {
            "externalId": this.externalId,
            "internalId": this.internalId,
            "type": this.type,
            "xsi:type": "platformCore:RecordRef",
        };

        if (!this.externalId) {
            delete attr.externalId;
        }

        if (!this.internalId) {
            delete attr.internalId;
        }

        if (!this.type) {
            delete attr.type;
        }

        return attr;
    }

    getNode() {

        if (!this.internalId && !this.externalId) {
            throw new Error("Neither internalId nor externalId are defined");
        }

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

module.exports = RecordRef;
