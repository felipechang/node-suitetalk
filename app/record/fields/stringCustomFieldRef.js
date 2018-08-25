"use strict";

const CustomFieldRef = require("./common/customFieldRef");

class StringCustomFieldRef extends CustomFieldRef {

    constructor() {
        super();
        this._fieldType = "string";
        this._type = "StringCustomFieldRef";
    }
}

module.exports = StringCustomFieldRef;
