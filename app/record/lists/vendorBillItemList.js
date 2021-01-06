"use strict";

const List = require("./common/list");

class VendorBillExpenseList extends List {

    constructor() {
        super();
        this._type = "tranPurch";
        this._name = "VendorBillExpenseList";
        this._listName = "itemList";
    }
}

module.exports = VendorBillExpenseList;
