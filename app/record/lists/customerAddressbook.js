"use strict";

const Line = require("./common/line");

class CustomerAddressbook extends Line {

    constructor() {
        super();
        this._type = "listRel";
        this._name = "CustomerAddressbook";
        this._listName = "addressbook";
    }
}

module.exports = CustomerAddressbook;
