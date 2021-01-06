"use strict";

const SearchBasic = require("./common/searchBasic");

class AccountSearchBasic extends SearchBasic {

    constructor() {
        super();
        this._type = "platformCommon";
        this._name = "AccountSearchBasic";
    }
}

module.exports = AccountSearchBasic;
