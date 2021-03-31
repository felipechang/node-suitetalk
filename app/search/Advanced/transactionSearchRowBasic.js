"use strict";

const SearchRowBasic = require("./common/searchRowBasic");

class transactionSearchRowBasic extends SearchRowBasic {

    constructor() {
        super();
        this._name = "transactionSearchRowBasic";
        this._type = "tranSales";
    }
}

module.exports = transactionSearchRowBasic;
