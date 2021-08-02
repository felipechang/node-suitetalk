"use strict";

const List = require("./common/list");

class VendorPaymentApplyList extends List {

    constructor() {
        super();
        this._type = "tranPurch";
        this._name = "VendorPaymentApplyList";
        this._listName = "applyList";
    }
}

module.exports = VendorPaymentApplyList;
