"use strict";

const SearchColumn = require("./common/searchColumn");

class SearchColumnBooleanField extends SearchColumn {

    constructor() {
        super();
        this._type = "platformCore";
        this._name = "SearchColumnBooleanField";
    }
}

module.exports = SearchColumnBooleanField;
