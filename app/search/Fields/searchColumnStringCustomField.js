"use strict";

const SearchColumn = require("./common/searchColumn");

class SearchColumnStringCustomField extends SearchColumn {

    constructor() {
        super();
        this._type = "platformCore";
        this._name = "SearchColumnStringCustomField";
    }
}

module.exports = SearchColumnStringCustomField;
