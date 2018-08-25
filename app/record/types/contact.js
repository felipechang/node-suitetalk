"use strict";

const Record = require("./common/record");

class Contact extends Record {

    constructor() {
        super();
        this._type = "listRel";
        this._name = "Contact";
    }
}

module.exports = Contact;
