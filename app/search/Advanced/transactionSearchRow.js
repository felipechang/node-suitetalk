"use strict";

const SearchRow = require("./common/searchRow");

class transactionSearchRow extends SearchRow {

    constructor() {
        super();
        this._name = "transactionSearchRow";
        this._type = "tranSales";
    }
}

module.exports = transactionSearchRow;
