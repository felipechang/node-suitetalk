"use strict";

const SearchColumn = require("./common/searchColumn");

class SearchColumnEnumMultiSelectCustomField extends SearchColumn {

    constructor() {
        super();
        this._type = "platformCore";
        this._name = "SearchColumnEnumMultiSelectCustomField";
    }
}

module.exports = SearchColumnEnumMultiSelectCustomField;
