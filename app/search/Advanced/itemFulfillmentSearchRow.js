"use strict";

const SearchRow = require("./common/searchRow");

class itemFulfillmentSearchRow extends SearchRow {

    constructor() {
        super();
        this._name = "itemFulfillmentSearchRow";
        this._type = "tranSales";
    }
}

module.exports = itemFulfillmentSearchRow;
