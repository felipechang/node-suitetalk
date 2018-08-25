"use strict";

const SearchColumn = require("./common/searchColumn");

class SearchColumnBooleanCustomField extends SearchColumn {

    constructor() {
        super();
        this._type = "platformCore";
        this._name = "SearchColumnBooleanCustomField";
    }
}

module.exports = SearchColumnBooleanCustomField;
