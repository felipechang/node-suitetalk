"use strict";

const Record = require("./common/record");

class Estimate extends Record {

    constructor() {
        super();
        this._type = "tranSales";
        this._name = "Estimate";
    }
}

module.exports = Estimate;
