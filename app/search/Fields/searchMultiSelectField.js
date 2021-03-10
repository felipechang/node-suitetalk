"use strict";

const SearchField = require("./common/searchField");

class SearchMultiSelectField extends SearchField {

    constructor() {
        super();
        this._type = "platformCore";
        this._name = "SearchMultiSelectField";
    }

    getNode() {
        const node = super.getNode();
        const type = this._getSoapType();
        const value = node[type]["platformCore:searchValue"]["$value"];
        if (typeof value === 'object') {
            node[type]["platformCore:searchValue"]["$attributes"] = value;
            node[type]["platformCore:searchValue"]["$value"] = undefined;
        }
        return node;
    }
}

module.exports = SearchMultiSelectField;
