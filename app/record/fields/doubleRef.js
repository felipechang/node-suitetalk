"use strict";

const Field = require("./common/field");

class DoubleRef extends Field {

    constructor() {
        super();
        this._fieldType = "number";
    }
}

module.exports = DoubleRef;
