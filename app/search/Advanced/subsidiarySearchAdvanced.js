"use strict";

const SearchAdvanced = require("./common/searchAdvanced");

class SubsidiarySearchAdvanced extends SearchAdvanced {

    constructor() {
        super();
        this._name = "SubsidiarySearchAdvanced";
        this._type = "listAcct";
    }
}

module.exports = SubsidiarySearchAdvanced;
