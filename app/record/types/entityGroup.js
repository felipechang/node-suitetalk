"use strict";

const Record = require("./common/record");

class EntityGroup extends Record {

    constructor() {
        super();
        this._type = "listRel";
        this._name = "EntityGroup";
    }
}

module.exports = EntityGroup;
