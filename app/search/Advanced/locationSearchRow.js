"use strict";

const SearchRow = require("./common/searchRow");

class locationSearchRow extends SearchRow {

    constructor() {
        super();
        this._name = "locationSearchRow";
        this._type = "listAcct";
    }
}

module.exports = locationSearchRow;
