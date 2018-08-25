"use strict";

const SearchRow = require("./common/searchRow");

class subsidiarySearchRow extends SearchRow {

    constructor() {
        super();
        this._name = "subsidiarySearchRow";
        this._type = "listAcct";
    }
}

module.exports = subsidiarySearchRow;
