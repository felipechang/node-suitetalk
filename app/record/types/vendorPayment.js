"use strict";

const Record = require("./common/record");

class VendorPayment extends Record {

    constructor() {
        super();
        this._type = "tranPurch";
        this._name = "VendorPayment";
    }
}

module.exports = VendorPayment;
