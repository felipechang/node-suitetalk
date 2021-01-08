"use strict";

const Record = require("./common/record");

class GetAllRecord extends Record {

    constructor() {
        super();
        this._type = "platformCore";
        this._name = "GetAllRecord";
    }
}

module.exports = GetAllRecord;
