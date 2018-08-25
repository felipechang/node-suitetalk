"use strict";

const SearchColumn = require("./common/searchColumn");

class SearchColumnMultiSelectCustomField extends SearchColumn {

    constructor() {
        super();
        this._type = "platformCore";
        this._name = "SearchColumnMultiSelectCustomField";
    }
}

module.exports = SearchColumnMultiSelectCustomField;
