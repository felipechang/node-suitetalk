"use strict";

const SearchColumn = require("./common/searchColumn");

class SearchColumnSelectCustomField extends SearchColumn {

    constructor() {
        super();
        this._type = "platformCore";
        this._name = "SearchColumnSelectCustomField";
    }
}

module.exports = SearchColumnSelectCustomField;
