"use strict";

const SearchAdvanced = require("./common/searchAdvanced");

class ItemSearchAdvanced extends SearchAdvanced {

    constructor() {
        super();
        this._name = "ItemSearchAdvanced";
        this._type = "listAcct";
    }
}

module.exports = ItemSearchAdvanced;
