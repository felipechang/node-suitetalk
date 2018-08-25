"use strict";

const List = require("./common/list");

class SalesOrderItemList extends List {

    constructor() {
        super();
        this._type = "tranSales";
        this._name = "SalesOrderItemList";
        this._listName = "itemList";
    }
}

module.exports = SalesOrderItemList;
