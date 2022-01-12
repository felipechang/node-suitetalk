"use strict";

const List = require("./common/list");
const VendorCurrency = require('./vendorCurrency');

class VendorCurrencyList extends List {

    constructor() {
        super();
        this._type = "listRel";
        this._name = "VendorCurrencyList";
        this._listName = "currencyList";
    }

    addCurrencyItem({currencyRef}) {
        if (!currencyRef) return false;

        const vendorCurrency = new VendorCurrency();
        vendorCurrency.addRecordField('currency', 'currency', currencyRef)
        this.list.push(vendorCurrency);

        return true
    }
}

module.exports = VendorCurrencyList;
