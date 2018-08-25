"use strict";

const BaseObject = require("../baseObject");

class RequestPreferences extends BaseObject {

    constructor() {
        super();
        this.warningAsError = undefined;
        this.useConditionalDefaultsOnAdd = undefined;
        this.useConditionalDefaultsOnUpdate = undefined;
        this.disableMandatoryCustomFieldValidation = undefined;
        this.disableSystemNotesForCustomFields = undefined;
        this.ignoreReadOnlyFields = undefined;
        this.runServerSuiteScriptAndWorkflowTriggers = undefined;
    }

    _getSoapType() {
        return "preferences";
    }

    _getAttributes() {
        return {
            "xsi:type": "preferences",
        };
    }

    getNode() {

        const attributes = this._getAttributes();
        const type = this._getSoapType();

        if (!type) {
            throw new Error(`Invalid SOAP type ${type}`);
        }

        const node = {};

        node[type] = {};

        if (attributes) {
            node[type]["$attributes"] = attributes;
        }

        if(this.warningAsError !== undefined){
            node[type].warningAsError = this.warningAsError;
        }

        if(this.useConditionalDefaultsOnAdd !== undefined){
            node[type].useConditionalDefaultsOnAdd = this.useConditionalDefaultsOnAdd;
        }

        if(this.useConditionalDefaultsOnUpdate !== undefined){
            node[type].useConditionalDefaultsOnUpdate = this.useConditionalDefaultsOnUpdate;
        }


        if(this.disableMandatoryCustomFieldValidation !== undefined){
            node[type].disableMandatoryCustomFieldValidation = this.disableMandatoryCustomFieldValidation;
        }

        if(this.disableSystemNotesForCustomFields !== undefined){
            node[type].disableSystemNotesForCustomFields = this.disableSystemNotesForCustomFields;
        }

        if(this.ignoreReadOnlyFields !== undefined){
            node[type].ignoreReadOnlyFields = this.ignoreReadOnlyFields;
        }

        if(this.runServerSuiteScriptAndWorkflowTriggers !== undefined){
            node[type].runServerSuiteScriptAndWorkflowTriggers = this.runServerSuiteScriptAndWorkflowTriggers;
        }

        return node;
    }
}

module.exports = RequestPreferences;
