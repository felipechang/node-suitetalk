"use strict";

const Record = require("./common/record");

class SalesOrder extends Record {

    constructor() {
        super();
        this._type = "tranSales";
        this._name = "SalesOrder";
    }
}

module.exports = SalesOrder;
