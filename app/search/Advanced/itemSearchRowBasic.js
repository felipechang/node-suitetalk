"use strict";

const SearchRowBasic = require("./common/searchRowBasic");

class itemSearchRowBasic extends SearchRowBasic {

    constructor() {
        super();
        this._name = "itemSearchRowBasic";
        this._type = "listAcct";
    }
}

module.exports = itemSearchRowBasic;
