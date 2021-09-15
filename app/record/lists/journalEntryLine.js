"use strict";

const Line = require("./common/line");

class JournalEntryLine extends Line {

    constructor() {
        super();
        this._type = "tranGeneral";
        this._name = "JournalEntryLine";
        this._listName = "line";
    }
}

module.exports = JournalEntryLine;
