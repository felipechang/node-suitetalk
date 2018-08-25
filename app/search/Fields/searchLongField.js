"use strict";

const SearchField = require("./common/searchField");

class SearchLongField extends SearchField {

    constructor() {
        super();
        this._type = "platformCore";
        this._name = "SearchLongField";
    }
}

module.exports = SearchLongField;
