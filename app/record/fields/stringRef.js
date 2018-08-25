"use strict";

const Field = require("./common/field");

class StringRef extends Field {

    constructor() {
        super();
        this._fieldType = "string";
    }
}

module.exports = StringRef;
