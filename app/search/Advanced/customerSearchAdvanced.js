"use strict";

const SearchAdvanced = require("./common/searchAdvanced");

class CustomerSearchAdvanced extends SearchAdvanced {

    constructor() {
        super();
        this._name = "CustomerSearchAdvanced";
        this._type = "listRel";
    }
}

module.exports = CustomerSearchAdvanced;
