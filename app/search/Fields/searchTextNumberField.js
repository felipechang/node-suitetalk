"use strict";

const SearchField = require("./common/searchField");

class SearchTextNumberField extends SearchField {

    constructor() {
        super();
        this._type = "platformCore";
        this._name = "SearchTextNumberField";
    }
}

module.exports = SearchTextNumberField;
