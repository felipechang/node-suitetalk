"use strict";

const Line = require("./common/line");

class VendorCurrency extends Line {

    constructor() {
        super();
        this._type = "listRel";
        this._name = "VendorCurrency";
        this._listName = "vendorCurrency";
    }
}

module.exports = VendorCurrency;
