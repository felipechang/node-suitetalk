"use strict";

const List = require("./common/list");
const CustomerCurrency = require('./customerCurrency');

class CustomerCurrencyList extends List {

    constructor() {
        super();
        this._type = "listRel";
        this._name = "CustomerCurrencyList";
        this._listName = "currencyList";
    }

    addCurrencyItem({currencyRef}) {
        if (!currencyRef) return false;

        const customerCurrency = new CustomerCurrency();
        customerCurrency.addRecordField('currency', 'currency', currencyRef)
        this.list.push(customerCurrency);

        return true
    }
}

module.exports = CustomerCurrencyList;
