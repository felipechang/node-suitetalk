"use strict";

const Record = require("./common/record");

class Vendor extends Record {

    constructor() {
        super();
        this._type = "listRel";
        this._name = "Vendor";
    }
}

module.exports = Vendor;
