"use strict";

const Record = require("./common/record");

class AttachBasicReference extends Record {

    constructor() {
        super();
        this._type = "platformCore";
        this._name = "AttachBasicReference";
    }
}

module.exports = AttachBasicReference;
