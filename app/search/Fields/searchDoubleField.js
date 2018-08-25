"use strict";

const SearchField = require("./common/searchField");

class SearchDoubleField extends SearchField {

    constructor() {
        super();
        this._type = "platformCore";
        this._name = "SearchDoubleField";
    }
}

module.exports = SearchDoubleField;
