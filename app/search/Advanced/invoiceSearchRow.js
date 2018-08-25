"use strict";

const SearchRow = require("./common/searchRow");

class invoiceSearchRow extends SearchRow {

    constructor() {
        super();
        this._name = "invoiceSearchRow";
        this._type = "tranSales";
    }
}

module.exports = invoiceSearchRow;
