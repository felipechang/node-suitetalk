"use strict";

const Line = require("./common/line");

class CreditMemoItem extends Line {

    constructor() {
        super();
        this._type = "tranCust";
        this._name = "CreditMemoItem";
        this._listName = "item";
    }
}

module.exports = CreditMemoItem;
