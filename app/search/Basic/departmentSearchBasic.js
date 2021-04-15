"use strict";

const SearchBasic = require("./common/searchBasic");

class DepartmentSearchBasic extends SearchBasic {

    constructor() {
        super();
        this._type = "platformCommon";
        this._name = "DepartmentSearchBasic";
    }
}

module.exports = DepartmentSearchBasic;
