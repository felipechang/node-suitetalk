"use strict";

const SearchRowBasic = require("./common/searchRowBasic");

class locationSearchRowBasic extends SearchRowBasic {

    constructor() {
        super();
        this._name = "locationSearchRowBasic";
        this._type = "listAcct";
    }
}

module.exports = locationSearchRowBasic;
