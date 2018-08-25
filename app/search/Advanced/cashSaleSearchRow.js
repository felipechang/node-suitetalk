"use strict";

const SearchRow = require("./common/searchRow");

class cashSaleSearchRow extends SearchRow {

    constructor() {
        super();
        this._name = "cashSaleSearchRow";
        this._type = "tranSales";
    }
}

module.exports = cashSaleSearchRow;
