"use strict";

const Record = require("./common/record");

class CreditMemo extends Record {

    constructor() {
        super();
        this._type = "tranCust";
        this._name = "CreditMemo";
    }
}

module.exports = CreditMemo;
