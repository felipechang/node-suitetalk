"use strict";

const BaseObject = require("../../../baseObject");

class List extends BaseObject {

    constructor() {
        super();
        this.replaceAll = false;
        this.list = [];
        this._listName = undefined;
    }

    _getSoapType() {
        return `${this._type}:${this._listName}`;
    }

    _getAttributes() {
        return {
            "replaceAll": this.replaceAll,
            "xsi:type": `${this._type}:${this._name}`,
        };
    }

    getNode() {

        const attributes = this._getAttributes();
        const type = this._getSoapType();

        if(!type){
            throw new Error(`Invalid SOAP type ${type}`);
        }

        const node = {};

        node[type] = {};

        if (attributes) {
            node[type]["$attributes"] = attributes;
        }

        this.list.forEach((el) => {
            if (!el._type) {
                el._type = this._type;
            }
            Object.assign(node[type], el.getNode());
        });

        return node;
    }
}

module.exports = List;
