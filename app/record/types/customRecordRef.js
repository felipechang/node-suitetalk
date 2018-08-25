"use strict";

const Reference = require("./common/reference");

class CustomRecordRef extends Reference {

    constructor() {
        super();
        this.typeId = undefined;
        this._reference = "CustomRecordRef";
    }
}

module.exports = CustomRecordRef;
