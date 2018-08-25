"use strict";

const Field = require("./common/field");

class BooleanRef extends Field {

    constructor() {
        super();
        this._fieldType = "boolean";
    }
}

module.exports = BooleanRef;
