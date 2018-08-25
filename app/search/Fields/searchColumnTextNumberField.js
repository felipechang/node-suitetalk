"use strict";

const SearchColumn = require("./common/searchColumn");

class SearchColumnTextNumberField extends SearchColumn {

    constructor() {
        super();
        this._type = "platformCore";
        this._name = "SearchColumnTextNumberField";
    }
}

module.exports = SearchColumnTextNumberField;
