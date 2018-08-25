"use strict";

const SearchColumn = require("./common/searchColumn");

class SearchColumnDateField extends SearchColumn {

    constructor() {
        super();
        this._type = "platformCore";
        this._name = "SearchColumnDateField";
    }
}

module.exports = SearchColumnDateField;
