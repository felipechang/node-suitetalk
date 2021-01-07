"use strict";

const Line = require("./common/line");

class VendorBillExpense extends Line {

    constructor() {
        super();
        this._type = "tranPurch";
        this._name = "VendorBillExpense";
        this._listName = "expense";
    }
}

module.exports = VendorBillExpense;
