"use strict";

const List = require("./common/list");

class CustomerAddressbookList extends List {

    constructor() {
        super();
        this._type = "listRel";
        this._name = "CustomerAddressbookList";
        this._listName = "addressbookList";
    }
}

module.exports = CustomerAddressbookList;
