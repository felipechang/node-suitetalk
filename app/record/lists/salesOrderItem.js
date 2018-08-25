"use strict";

const Line = require("./common/line");

class SalesOrderItem extends Line {

    constructor() {
        super();
        this._type = "tranSales";
        this._name = "SalesOrderItem";
        this._listName = "item";
    }
}

module.exports = SalesOrderItem;
