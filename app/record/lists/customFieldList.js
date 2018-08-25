"use strict";

const BaseObject = require("../../baseObject");

class CustomFieldList extends BaseObject {

    constructor() {
        super();
        this.customFields = [];
    }

    _getSoapType() {
        return `${this._type}:customFieldList`;
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

        const xml = [];

        // Node soap is not friendly to arrays. Outputs as object.
        this.customFields.map((el) => {
            const t = el._getSoapType();
            const e = el.getNode()[t];
            const a = e[["$attributes"]];
            const v = e[["$value"]];

            xml.push(`<platformCore:customField xsi:type="${a["xsi:type"]}" `);

            if (a["scriptId"]) {
                xml.push(`scriptId="${a["scriptId"]}" `);
            }

            if (a["internalId"]) {
                xml.push(`internalId="${a["internalId"]}" `);
            }

            xml.push(`>`);
            xml.push(`<platformCore:value>${v}</platformCore:value>`);
            xml.push("</platformCore:customField>");
        });

        node[type]["$xml"] = xml.join("");

        return node;
    }
}

module.exports = CustomFieldList;
