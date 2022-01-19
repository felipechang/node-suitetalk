"use strict";

const Record = require("./common/record");

class CustomerSubsidiaryRelationship extends Record {

    constructor() {
        super();
        this._type = "listRel";
        this._name = "CustomerSubsidiaryRelationship";
    }
}

module.exports = CustomerSubsidiaryRelationship;
