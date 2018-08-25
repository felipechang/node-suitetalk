"use strict";

const CustomFieldRef = require("./common/customFieldRef");

class BooleanCustomFieldRef extends CustomFieldRef {

    constructor() {
        super();
        this._fieldType = "boolean";
        this._type = "BooleanCustomFieldRef";
    }
}

module.exports = BooleanCustomFieldRef;
