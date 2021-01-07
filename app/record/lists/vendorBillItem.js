"use strict";

const Line = require("./common/line");

class VendorBillItem extends Line {

    constructor() {
        super();
        this._type = "tranPurch";
        this._name = "VendorBillItem";
        this._listName = "item";
    }
}

module.exports = VendorBillItem;
