"use strict";

const SearchRowBasic = require("./common/searchRowBasic");

class invoiceSearchRowBasic extends SearchRowBasic {

    constructor() {
        super();
        this._name = "invoiceSearchRowBasic";
        this._type = "tranSales";
    }
}

module.exports = invoiceSearchRowBasic;
