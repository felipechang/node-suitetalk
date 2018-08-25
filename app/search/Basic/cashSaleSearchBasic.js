"use strict";

const SearchBasic = require("./common/searchBasic");

class CashSaleSearchBasic extends SearchBasic {

    constructor() {
        super();
        this._type = "platformCommon";
        this._name = "CashSaleSearchBasic";
    }
}

module.exports = CashSaleSearchBasic;
