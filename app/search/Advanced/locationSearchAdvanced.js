"use strict";

const SearchAdvanced = require("./common/searchAdvanced");

class LocationSearchAdvanced extends SearchAdvanced {

    constructor() {
        super();
        this._name = "LocationSearchAdvanced";
        this._type = "listAcct";
    }
}

module.exports = LocationSearchAdvanced;
