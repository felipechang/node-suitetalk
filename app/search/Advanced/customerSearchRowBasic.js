"use strict";

const SearchRowBasic = require("./common/searchRowBasic");

class customerSearchRowBasic extends SearchRowBasic {

    constructor() {
        super();
        this._name = "customerSearchRowBasic";
        this._type = "listRel";
    }
}

module.exports = customerSearchRowBasic;
