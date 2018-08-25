"use strict";

const SearchAdvanced = require("./common/searchAdvanced");

class SalesOrderSearchAdvanced extends SearchAdvanced {

    constructor() {
        super();
        this._name = "SalesOrderSearchAdvanced";
        this._type = "tranSales";
    }
}

module.exports = SalesOrderSearchAdvanced;
