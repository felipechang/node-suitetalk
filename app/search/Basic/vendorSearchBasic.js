"use strict";

const SearchBasic = require("./common/searchBasic");

class VendorSearchBasic extends SearchBasic {

    constructor() {
        super();
        this._type = "platformCommon";
        this._name = "VendorSearchBasic";
    }
}

module.exports = VendorSearchBasic;
