"use strict";

const CustomFieldRef = require("./common/customFieldRef");

class DoubleCustomFieldRef extends CustomFieldRef {

    constructor() {
        super();
        this._fieldType = "double";
        this._type = "DoubleCustomFieldRef";
    }
}

module.exports = DoubleCustomFieldRef;
