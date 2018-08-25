"use strict";

const SearchField = require("./common/searchField");

class SearchMultiSelectField extends SearchField {

    constructor() {
        super();
        this._type = "platformCore";
        this._name = "SearchMultiSelectField";
    }
}

module.exports = SearchMultiSelectField;
