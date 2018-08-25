"use strict";

const SearchRow = require("./common/searchRow");

class salesOrderSearchRow extends SearchRow {

    constructor() {
        super();
        this._name = "salesOrderSearchRow";
        this._type = "tranSales";
    }
}

module.exports = salesOrderSearchRow;
