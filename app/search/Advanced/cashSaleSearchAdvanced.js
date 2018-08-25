"use strict";

const SearchAdvanced = require("./common/searchAdvanced");

class CashSaleSearchAdvanced extends SearchAdvanced {

    constructor() {
        super();
        this._name = "CashSaleSearchAdvanced";
        this._type = "tranSales";
    }
}

module.exports = CashSaleSearchAdvanced;
