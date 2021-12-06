'use strict';

const Line = require('./common/line');

class TransferOrderItem extends Line {
  constructor() {
    super();
    this._type = 'tranInvt';
    this._name = 'TransferOrderItem';
    this._listName = 'item';
  }
}

module.exports = TransferOrderItem;
