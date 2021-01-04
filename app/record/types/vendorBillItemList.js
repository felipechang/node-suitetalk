"use strict";

const Record = require("./common/record");

class VendorBillItemList extends Record {

    constructor() {
        super();
        this._type = "tranPurch";
        this._name = "VendorBillItemList";
    }
}

module.exports = VendorBillItemList;
