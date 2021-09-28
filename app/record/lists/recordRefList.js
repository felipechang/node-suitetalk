"use strict";

const List = require("./common/list");
const RecordRef = require("../fields/recordRef");

class RecordRefList extends List {

    constructor(name) {
        super();
        this._type = "listAcct";
        this._name = "RecordRefList";
        this._listName = name;
    }

    addItem(type, fieldName, internalId) {
        this.list.push(RecordRef.build(type, fieldName, internalId, {_type: 'platformCore', _name: 'RecordRef'}));
    }
}

module.exports = RecordRefList;
