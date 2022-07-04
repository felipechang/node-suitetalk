"use strict";

const CustomFieldRef = require("./common/customFieldRef");

class SelectCustomFieldRef extends CustomFieldRef {

    constructor() {
        super();
        this._fieldType = "*";
        this._type = "SelectCustomFieldRef";
    }
}

module.exports = SelectCustomFieldRef;
