"use strict";

const SearchRowBasic = require("./common/searchRowBasic");

class itemFulfillmentSearchRowBasic extends SearchRowBasic {

    constructor() {
        super();
        this._name = "itemFulfillmentSearchRowBasic";
        this._type = "tranSales";
    }
}

module.exports = itemFulfillmentSearchRowBasic;
