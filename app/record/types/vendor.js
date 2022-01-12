"use strict";

const Record = require("./common/record");
const VendorCurrencyList = require('../lists/vendorCurrencyList');

class Vendor extends Record {
    
    constructor() {
        super();
        this._type = "listRel";
        this._name = "Vendor";
    }

    addCurrency(data) {
        if (!this._currencyList) {
            this._currencyList = new VendorCurrencyList();
            this.bodyFieldList.push(this._currencyList);
        }

        this._currencyList.addCurrencyItem(data);
    }
}

module.exports = Vendor;
