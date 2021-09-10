"use strict";

const Record = require("./common/record");

class Account extends Record {

    constructor() {
        super();
        this._type = "listAcct";
        this._name = "Account";
    }
}

module.exports = Account;
