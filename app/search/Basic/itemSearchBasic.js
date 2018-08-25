"use strict";

const SearchBasic = require("./common/searchBasic");

class ItemSearchBasic extends SearchBasic {

    constructor() {
        super();
        this._type = "platformCommon";
        this._name = "ItemSearchBasic";
    }
}

module.exports = ItemSearchBasic;
