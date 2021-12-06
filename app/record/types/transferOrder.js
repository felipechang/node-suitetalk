'use strict';

const Record = require('./common/record');

class TransferOrder extends Record {
  constructor() {
    super();
    this._type = 'tranInvt';
    this._name = 'TransferOrder';
  }
}

module.exports = TransferOrder;
