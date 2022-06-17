"use strict";

const List = require("./common/list");

class CreditMemoItemList extends List {

    constructor() {
        super();
        this._type = "tranCust";
        this._name = "CreditMemoItemList";
        this._listName = "itemList";
    }
}

module.exports = CreditMemoItemList;
