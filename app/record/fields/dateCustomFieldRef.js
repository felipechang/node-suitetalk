"use strict";

const CustomFieldRef = require("./common/customFieldRef");

class DateCustomFieldRef extends CustomFieldRef {

    constructor() {
        super();
        this._fieldType = "string";
        this._type = "DateCustomFieldRef";
    }
}

module.exports = DateCustomFieldRef;
