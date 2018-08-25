"use strict";

const BaseObject = require("../../../baseObject");

class Field extends BaseObject {

    constructor() {
        super();
        this.field = undefined;
        this.value = undefined;
        this._fieldType = undefined;
    }

    _getSoapType() {
        return `${this._type}:${this.field}`;
    }

    _getAttributes() {
        return "";
    }

    getNode() {

        if (!this.field) {
            throw new Error("Field name not defined");
        }

        if (typeof this.value !== this._fieldType) {
            throw new Error(`Invalid type value ${typeof this.value} for field ${this.field}`);
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

        node[type]["$value"] = this.value;

        return node;
    }
}

module.exports = Field;
