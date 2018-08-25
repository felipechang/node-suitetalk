"use strict";

const List = require("./common/list");

class CustomList extends List {

    constructor() {
        super();
        this._type = "setupCustom";
        this._name = "CustomList";
        this._listName = "customList";
    }
}

module.exports = CustomList;
