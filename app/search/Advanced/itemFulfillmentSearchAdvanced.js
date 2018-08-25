"use strict";

const SearchAdvanced = require("./common/searchAdvanced");

class ItemFulfillmentSearchAdvanced extends SearchAdvanced {

    constructor() {
        super();
        this._name = "ItemFulfillmentSearchAdvanced";
        this._type = "tranSales";
    }
}

module.exports = ItemFulfillmentSearchAdvanced;
