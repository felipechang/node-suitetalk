"use strict";

const SearchRowBasic = require("./common/searchRowBasic");

class subsidiarySearchRowBasic extends SearchRowBasic {

    constructor() {
        super();
        this._name = "subsidiarySearchRowBasic";
        this._type = "listAcct";
    }
}

module.exports = subsidiarySearchRowBasic;
