"use strict";

const SearchBasic = require("./common/searchBasic");

class TransactionSearchBasic extends SearchBasic {

    constructor() {
        super();
        this._type = "platformCommon";
        this._name = "TransactionSearchBasic";
    }
}

module.exports = TransactionSearchBasic;
