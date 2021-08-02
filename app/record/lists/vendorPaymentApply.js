"use strict";

const Line = require("./common/line");

class VendorPaymentApply extends Line {

    constructor() {
        super();
        this._type = "tranPurch";
        this._name = "VendorPaymentApply";
        this._listName = "apply";
    }
}

module.exports = VendorPaymentApply;
