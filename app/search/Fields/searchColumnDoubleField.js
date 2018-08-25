"use strict";

const SearchColumn = require("./common/searchColumn");

class SearchColumnDoubleField extends SearchColumn {

    constructor() {
        super();
        this._type = "platformCore";
        this._name = "SearchColumnDoubleField";
    }
}

module.exports = SearchColumnDoubleField;
