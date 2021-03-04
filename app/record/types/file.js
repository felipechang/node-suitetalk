"use strict";

const Record = require("./common/record");

class File extends Record {

    constructor() {
        super();
        this._type = "fileCabinet";
        this._name = "File";
    }
}

module.exports = File;
