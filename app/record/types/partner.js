"use strict";

const Record = require("./common/record");

class Partner extends Record {

    constructor() {
        super();
        this._type = "listRel";
        this._name = "Partner";
    }
}

module.exports = Partner;
