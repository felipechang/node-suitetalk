"use strict";

const SearchAdvanced = require("./common/searchAdvanced");

class TransactionSearchAdvanced extends SearchAdvanced {

    constructor() {
        super();
        this._name = "TransactionSearchAdvanced";
        this._type = "tranSales";
    }
}

module.exports = TransactionSearchAdvanced;
