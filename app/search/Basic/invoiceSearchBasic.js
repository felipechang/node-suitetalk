"use strict";

const SearchBasic = require("./common/searchBasic");

class InvoiceSearchBasic extends SearchBasic {

    constructor() {
        super();
        this._type = "platformCommon";
        this._name = "InvoiceSearchBasic";
    }
}

module.exports = InvoiceSearchBasic;
