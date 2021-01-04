"use strict";

const Record = require("./common/record");

class VendorBill extends Record {

    constructor() {
        super();
        this._type = "tranPurch";
        this._name = "VendorBill";
    }
}

module.exports = VendorBill;
