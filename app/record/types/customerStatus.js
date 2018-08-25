"use strict";

const Record = require("./common/record");

class CustomerStatus extends Record {

    constructor() {
        super();
        this._type = "listRel";
        this._name = "CustomerStatus";
    }
}

module.exports = CustomerStatus;
