"use strict";

const SearchBasic = require("./common/searchBasic");

class SubsidiarySearchBasic extends SearchBasic {

    constructor() {
        super();
        this._type = "platformCommon";
        this._name = "SubsidiarySearchBasic";
    }
}

module.exports = SubsidiarySearchBasic;
