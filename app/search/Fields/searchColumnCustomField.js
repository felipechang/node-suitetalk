"use strict";

const SearchColumn = require("./common/searchColumn");

class SearchColumnCustomField extends SearchColumn {

    constructor() {
        super();
        this._type = "platformCore";
        this._name = "SearchColumnCustomField";
    }
}

module.exports = SearchColumnCustomField;
