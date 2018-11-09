"use strict";

const BaseObject = require("../../../baseObject");

class Reference extends BaseObject {

    constructor() {
        super();
        this.internalId = undefined;
        this.externalId = undefined;
        this.type = undefined;
        this.name = undefined;
        this._reference = undefined;
    }

    _getSoapType() {
        return "baseRef";
    }

    _getAttributes() {

        const attr = {
            "externalId": this.externalId,
            "internalId": this.internalId,
            "name": this.name,
            "type": this.type,
            "typeId": this.typeId,
            "xsi:type": `platformCore:${this._reference}`,
        };

        if (!this.externalId) {
            delete attr.externalId;
        }

        if (!this.internalId) {
            delete attr.internalId;
        }

        if (!this.name) {
            delete attr.name;
        }

        if (!this.type) {
            delete attr.type;
        }

        if (!this.typeId) {
            delete attr.typeId;
        }

        return attr;
    }

    getNode() {

        if (!this.externalId && !this.internalId) {
            throw new Error("Neither internalId nor externalId are defined");
        }

        if (!this.type && !this.typeId) {
            throw new Error("Invalid cast. Must use a type or typeId reference");
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

module.exports = Reference;
