"use strict";

const BaseObject = require("../../../baseObject");

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
