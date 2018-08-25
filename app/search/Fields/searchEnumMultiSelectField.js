"use strict";

const SearchField = require("./common/searchField");

class SearchEnumMultiSelectField extends SearchField {

    constructor() {
        super();
        this._type = "platformCore";
        this._name = "SearchEnumMultiSelectField";
    }
}

module.exports = SearchEnumMultiSelectField;
