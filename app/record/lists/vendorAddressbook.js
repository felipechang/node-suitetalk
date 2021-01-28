"use strict";

const SubRecord = require("./common/subrecord");

class VendorAddressbook extends SubRecord {

    constructor() {
        super();
        this._type = "listRel";
        this._name = "VendorAddressbook";
        this._listName = "addressbook";
    }
}

module.exports = VendorAddressbook;
