"use strict";

const Record = require("./common/record");

class BillingAccount extends Record {

    constructor() {
        super();
        this._type = "listRel";
        this._name = "BillingAccount";
    }
}

module.exports = BillingAccount;
