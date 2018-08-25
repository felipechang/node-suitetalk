"use strict";

const SearchColumn = require("./common/searchColumn");

class SearchColumnSelectField extends SearchColumn {

    constructor() {
        super();
        this._type = "platformCore";
        this._name = "SearchColumnSelectField";
    }
}

module.exports = SearchColumnSelectField;
