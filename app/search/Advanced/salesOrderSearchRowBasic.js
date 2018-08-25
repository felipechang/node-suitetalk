"use strict";

const SearchRowBasic = require("./common/searchRowBasic");

class salesOrderSearchRowBasic extends SearchRowBasic {

    constructor() {
        super();
        this._name = "salesOrderSearchRowBasic";
        this._type = "tranSales";
    }
}

module.exports = salesOrderSearchRowBasic;
