"use strict";

const SubRecord = require("./common/subrecord");

class JobAddressbook extends SubRecord {

    constructor() {
        super();
        this._type = "listRel";
        this._name = "JobAddressbook";
        this._listName = "addressbook";
    }
}

module.exports = JobAddressbook;
