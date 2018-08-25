"use strict";

const SearchRow = require("./common/searchRow");

class customerSearchRow extends SearchRow {

    constructor() {
        super();
        this._name = "customerSearchRow";
        this._type = "listRel";
    }
}

module.exports = customerSearchRow;
