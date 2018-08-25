"use strict";

const SearchBasic = require("./common/searchBasic");

class SalesOrderSearchBasic extends SearchBasic {

    constructor() {
        super();
        this._type = "platformCommon";
        this._name = "SalesOrderSearchBasic";
    }
}

module.exports = SalesOrderSearchBasic;
