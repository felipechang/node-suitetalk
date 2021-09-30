'use strict';

const Record = require('./common/record');
const CustomFieldList = require('../lists/customFieldList');
const JobAddressbookList = require('../lists/jobAddressbookList');

class Customer extends Record {
    constructor() {
        super();
        this._type = 'listRel';
        this._name = 'Customer';
        this._cfList = undefined;
        this._jobAddressList = undefined;
    }

    addStringCustomFieldRef(fieldName, value) {
        if (!fieldName || !value) return;
        if (!this._cfList) {
            this._cfList = new CustomFieldList('listRel');
            this.bodyFieldList.push(this._cfList);
        }

        this._cfList.addStringCustomFieldRef(fieldName, value);
    }

    addJobAddress(data) {
        if (!this._jobAddressList) {
            this._jobAddressList = new JobAddressbookList();
            this.bodyFieldList.push(this._jobAddressList);
        }

        this._jobAddressList.addAddressItem(data);
    }
}

module.exports = Customer;
