"use strict";

const SearchColumn = require("./common/searchColumn");

class SearchColumnLongCustomField extends SearchColumn {

    constructor() {
        super();
        this._type = "platformCore";
        this._name = "SearchColumnLongCustomField";
    }
}

module.exports = SearchColumnLongCustomField;
