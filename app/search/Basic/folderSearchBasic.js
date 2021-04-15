"use strict";

const SearchBasic = require("node-suitetalk/app/search/Basic/common/searchBasic");

class FolderSearchBasic extends SearchBasic {

    constructor() {
        super();
        this._type = "platformCommon";
        this._name = "FolderSearchBasic";
    }
}

module.exports = FolderSearchBasic;
