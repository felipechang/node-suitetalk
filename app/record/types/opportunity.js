"use strict";

const Record = require("./common/record");

class Opportunity extends Record {

    constructor() {
        super();
        this._type = "tranSales";
        this._name = "Opportunity";
    }
}

module.exports = Opportunity;
