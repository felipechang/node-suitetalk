"use strict";

const Record = require("./common/record");

class CustomRecord extends Record {

    constructor() {
        super();
        this.typeId = undefined;
        this._isCustomRecord = true;
        this._type = "setupCustom";
        this._name = "CustomRecord";
    }
}

module.exports = CustomRecord;
