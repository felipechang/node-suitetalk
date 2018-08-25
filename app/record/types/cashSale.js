"use strict";

const Record = require("./common/record");

class CashSale extends Record {

    constructor() {
        super();
        this._type = "tranSales";
        this._name = "CashSale";
    }
}

module.exports = CashSale;
