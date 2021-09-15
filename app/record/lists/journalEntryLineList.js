"use strict";

const List = require("./common/list");

class JournalEntryLineList extends List {

    constructor() {
        super();
        this._type = "tranGeneral";
        this._name = "JournalEntryLineList";
        this._listName = "lineList";
    }
}

module.exports = JournalEntryLineList;
