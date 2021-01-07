"use strict";

const List = require("./common/list");

class VendorBillItemList extends List {

    constructor() {
        super();
        this._type = "tranPurch";
        this._name = "VendorBillItemList";
        this._listName = "itemList";
    }
}

module.exports = VendorBillItemList;
