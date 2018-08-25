"use strict";

const Reference = require("./common/reference");

class ListOrRecordRef extends Reference {

    constructor() {
        super();
        this._reference = "ListOrRecordRef";
    }
}

module.exports = ListOrRecordRef;
