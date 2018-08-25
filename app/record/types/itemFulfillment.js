"use strict";

const Record = require("./common/record");

class ItemFulfillment extends Record {

    constructor() {
        super();
        this._type = "tranSales";
        this._name = "ItemFulfillment";
    }
}

module.exports = ItemFulfillment;
