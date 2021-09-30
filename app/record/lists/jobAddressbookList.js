"use strict";

const List = require("./common/list");
const JobAddressbook = require('./jobAddressbook');
const Address = require('./address');
const countries = require('../countries');

class JobAddressbookList extends List {

    constructor() {
        super();
        this._type = "listRel";
        this._name = "JobAddressbookList";
        this._listName = "addressbookList";
    }

    addAddressItem({street, city, zip, country}) {
        if (!street && !city && !zip && !country) return false;

        const addressbook = new JobAddressbook();
        const address = new Address();

        if (street) address.addStringField('addr1', street);
        if (city) address.addStringField('city', city);
        if (zip) address.addStringField('zip', zip);
        if (country) address.addStringField('country', countries[country]);

        addressbook.bodyFieldList.push(address);
        this.list.push(addressbook);

        return true
    }
}

module.exports = JobAddressbookList;
