"use strict";

const SubRecord = require("./common/subrecord");

class Address extends SubRecord {

    constructor() {
        super();
        this._type = "listRel";
        this._name = "Address";
        this._listName = "addressbookAddress";
    }
}

module.exports = Address;
