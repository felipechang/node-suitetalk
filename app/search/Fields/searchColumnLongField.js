"use strict";

const SearchColumn = require("./common/searchColumn");

class SearchColumnLongField extends SearchColumn {

    constructor() {
        super();
        this._type = "platformCore";
        this._name = "SearchColumnLongField";
    }
}

module.exports = SearchColumnLongField;
