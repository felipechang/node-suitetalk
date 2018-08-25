"use strict";

const Record = require("./common/record");

class Customer extends Record {

    constructor() {
        super();
        this._type = "listRel";
        this._name = "Customer";
    }
}

module.exports = Customer;
