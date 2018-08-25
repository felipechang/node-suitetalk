"use strict";

const SearchBasic = require("./common/searchBasic");

class ItemFulfillmentSearchBasic extends SearchBasic {

    constructor() {
        super();
        this._type = "platformCommon";
        this._name = "ItemFulfillmentSearchBasic";
    }
}

module.exports = ItemFulfillmentSearchBasic;
