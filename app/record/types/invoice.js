"use strict";

const Record = require("./common/record");

class Invoice extends Record {

    constructor() {
        super();
        this._type = "tranSales";
        this._name = "Invoice";
    }
}

module.exports = Invoice;
