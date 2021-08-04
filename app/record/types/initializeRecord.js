"use strict";

const Record = require("./common/record");

class InitializeRecord extends Record {

    constructor() {
        super();
        this._type = "platformCore";
        this._name = "InitializeRecord";
    }
}

module.exports = InitializeRecord;
