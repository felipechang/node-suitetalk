"use strict";

const SearchColumn = require("./common/searchColumn");

class SearchColumnCustomFieldList extends SearchColumn {

    constructor() {
        super();
        this._type = "platformCore";
        this._name = "SearchColumnCustomFieldList";
    }
}

module.exports = SearchColumnCustomFieldList;
