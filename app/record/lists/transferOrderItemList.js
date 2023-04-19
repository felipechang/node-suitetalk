'use strict';

const List = require('./common/list');

class TransferOrderItemList extends List {
  constructor() {
    super();
    this._type = 'tranInvt';
    this._name = 'TransferOrderItemList';
    this._listName = 'itemList';
  }
}

module.exports = TransferOrderItemList;
