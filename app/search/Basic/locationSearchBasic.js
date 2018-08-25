"use strict";

const SearchBasic = require("./common/searchBasic");

class LocationSearchBasic extends SearchBasic {

    constructor() {
        super();
        this._type = "platformCommon";
        this._name = "LocationSearchBasic";
    }
}

module.exports = LocationSearchBasic;
