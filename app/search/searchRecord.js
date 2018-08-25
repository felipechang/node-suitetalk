"use strict";

const BaseObject = require("../baseObject");

class SearchRecord extends BaseObject {

    constructor() {
        super();
    }

    _getSoapType() {
        return "searchRecord";
    }
}

module.exports = SearchRecord;
