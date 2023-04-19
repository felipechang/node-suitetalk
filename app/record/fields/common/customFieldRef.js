"use strict";

const BaseObject = require("../../../baseObject");

class CustomFieldRef extends BaseObject {

    constructor() {
        super();
        this.scriptId = undefined;
        this.internalId = undefined;
        this.value = undefined;
    }

    _getSoapType() {
        return "platformCore:customField";
    }

    _getAttributes() {

        const attr = {
            "scriptId": this.scriptId,
            "internalId": this.internalId,
            "xsi:type": `platformCore:${this._type}`,
        };

        if (!this.scriptId) {
            delete attr.scriptId;
        }

        if (!this.internalId) {
            delete attr.internalId;
        }

        return attr;
    }

    getNode() {

        if (!this.scriptId && !this.internalId) {
            throw new Error("Neither internalId nor scriptId are defined");
        }

        if (!this._fieldType) {
            throw new Error("Invalid cast. Must use a type reference");
        }

        if (this._fieldType !== "*" && typeof this.value !== this._fieldType) {
            throw new Error(`Invalid type value ${typeof this.value} for custom field`);
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

        if (this._fieldType !== "*") {
            node[type]["$value"] = this.value;
        } else {
            const fieldNode = this.value.getNode();
            const fieldType = this.value._getSoapType();

            const attributes = fieldNode[fieldType].$attributes;

            const xml = [];
            xml.push(`<platformCore:value xsi:type="${attributes["xsi:type"]}"`);
            
            if (attributes.internalId) {
                xml.push(` internalId="${attributes.internalId}"`);
            }
            
            if (attributes.externalId) {
                xml.push(` externalId="${attributes.externalId}"`);
            }
            
            if (attributes.type) {
                xml.push(` type="${attributes.type}"`);
            }

            xml.push('>');
            xml.push('</platformCore:value>');
            node[type]["$xml"] = xml.join('');
        }

        return node;
    }
}

module.exports = CustomFieldRef;
