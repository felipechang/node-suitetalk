"use strict";

class BaseObject {

    /**
     * _type & _name are used for templating
     */
    constructor() {
        this._type = undefined;
        this._name = undefined;
    }

    _getSoapType() {
        return "";
    }

    /**
     * Attributes added to the SOAP node
     */
    _getAttributes() {
        throw new Error("Must be implemented by subclass");
    }

    /**
     * Get SOAP node tree to be passed onto node-soap
     * @return {object}
     */
    getNode() {
        return "";
    }
}

module.exports = BaseObject;
