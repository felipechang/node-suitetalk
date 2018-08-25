"use strict";

const SearchColumn = require("./common/searchColumn");

class SearchColumnDoubleCustomField extends SearchColumn {

    constructor() {
        super();
        this._type = "platformCore";
        this._name = "SearchColumnDoubleCustomField";
    }
}

module.exports = SearchColumnDoubleCustomField;
