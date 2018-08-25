"use strict";

const SearchRowBasic = require("./common/searchRowBasic");

class cashSaleSearchRowBasic extends SearchRowBasic {

    constructor() {
        super();
        this._name = "cashSaleSearchRowBasic";
        this._type = "tranSales";
    }
}

module.exports = cashSaleSearchRowBasic;
