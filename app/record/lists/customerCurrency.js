"use strict";

const Line = require("./common/line");

class CustomerCurrency extends Line {

    constructor() {
        super();
        this._type = "listRel";
        this._name = "CustomerCurrency";
        this._listName = "currency";
    }
}

module.exports = CustomerCurrency;
