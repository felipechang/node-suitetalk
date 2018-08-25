"use strict";

const SearchRow = require("./common/searchRow");

class itemSearchRow extends SearchRow {

    constructor() {
        super();
        this._name = "itemSearchRow";
        this._type = "listAcct";
    }
}

module.exports = itemSearchRow;
