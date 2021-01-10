"use strict";

const SearchBasic = require("./common/searchBasic");

class AccountingPeriodSearchBasic extends SearchBasic {

    constructor() {
        super();
        this._type = "platformCommon";
        this._name = "AccountingPeriodSearchBasic";
    }
}

module.exports = AccountingPeriodSearchBasic;
