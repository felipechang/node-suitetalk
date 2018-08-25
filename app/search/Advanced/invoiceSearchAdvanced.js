"use strict";

const SearchAdvanced = require("./common/searchAdvanced");

class InvoiceSearchAdvanced extends SearchAdvanced {

    constructor() {
        super();
        this._name = "InvoiceSearchAdvanced";
        this._type = "tranSales";
    }
}

module.exports = InvoiceSearchAdvanced;
