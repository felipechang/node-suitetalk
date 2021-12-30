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

    _getNodeXML(node) {
        let type = (Object.keys(node))[0];
        let xml = `<${type}`;
        let attributes = node[type].$attributes && Object.entries(node[type].$attributes);
        let value = node[type].$value;

        if (attributes) {
            delete node[type].$attributes;
            for (const [attrName, attrValue] of attributes) {
                xml += ` ${attrName}="${attrValue}"`
            }
        }

        if (value) {
            delete node[type].$value;
            xml += `>${value}</${type}>`;
        } else {
            let children = Object.entries(node[type]);
            if (children) {
                xml += '>';
                for (const [childName, childNode] of children) {
                    const node = {};
                    node[childName] = childNode;
                    xml += this._getNodeXML(node);
                }
                xml += `</${type}>`;
            } else {
                xml += '/>';
            }
        }

        return xml;
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

        let xml = "";
        this.list.forEach((el) => {
            if (!el._type) {
                el._type = this._type;
            }
            xml += this._getNodeXML(el.getNode());
        });

        node[type].$xml = xml;
        return node;
    }
}

module.exports = List;
