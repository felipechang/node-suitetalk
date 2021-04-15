"use strict";

const SearchBasic = require("./common/searchBasic");

class ClassificationSearchBasic extends SearchBasic {

    constructor() {
        super();
        this._type = "platformCommon";
        this._name = "ClassificationSearchBasic";
    }
}

module.exports = ClassificationSearchBasic;
