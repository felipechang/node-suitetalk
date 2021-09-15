"use strict";

const Record = require("./common/record");

class JournalEntry extends Record {

    constructor() {
        super();
        this._type = "tranGeneral";
        this._name = "JournalEntry";
    }
}

module.exports = JournalEntry;
