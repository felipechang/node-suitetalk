"use strict";

const SearchField = require("./common/searchField");

class SearchBooleanField extends SearchField {

    constructor() {
        super();
        this._type = "platformCore";
        this._name = "SearchBooleanField";
    }
}

module.exports = SearchBooleanField;
