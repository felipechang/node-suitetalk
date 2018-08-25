"use strict";

const SearchColumn = require("./common/searchColumn");

class SearchColumnStringField extends SearchColumn {

    constructor() {
        super();
        this._type = "platformCore";
        this._name = "SearchColumnStringField";
    }
}

module.exports = SearchColumnStringField;
