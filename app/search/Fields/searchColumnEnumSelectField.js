"use strict";

const SearchColumn = require("./common/searchColumn");

class SearchColumnEnumSelectField extends SearchColumn {

    constructor() {
        super();
        this._type = "platformCore";
        this._name = "SearchColumnEnumSelectField";
    }
}

module.exports = SearchColumnEnumSelectField;
