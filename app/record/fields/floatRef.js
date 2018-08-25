"use strict";

const Field = require("./common/field");

class FloatRef extends Field {

    constructor() {
        super();
        this._fieldType = "number";
    }
}

module.exports = FloatRef;
