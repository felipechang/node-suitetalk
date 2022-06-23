"use strict";

const Record = require("./common/record");

class InventoryItem extends Record {

    constructor() {
        super();
        this._type = "listAcct";
        this._name = "inventoryItem";
    }
}

module.exports = InventoryItem;
