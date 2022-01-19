"use strict";

const Types = {
    Account: require("./account"),
    Address: require("./address"),
    AttachBasicReference: require("./attachBasicReference"),
    BillingAccount: require("./billingAccount"),
    CashSale: require("./cashSale"),
    Contact: require("./contact"),
    Customer: require("./customer"),
    CustomerStatus: require("./customerStatus"),
    CustomerSubsidiaryRelationship: require("./customerSubsidiaryRelationship"),
    CustomRecord: require("./customRecord"),
    CustomRecordRef: require("./customRecordRef"),
    EntityGroup: require("./entityGroup"),
    Estimate: require("./estimate"),
    File: require("./file"),
    InitializeRecord: require("./initializeRecord"),
    Invoice: require("./invoice"),
    ItemFulfillment: require("./itemFulfillment"),
    ListOrRecordRef: require("./listOrRecordRef"),
    Opportunity: require("./opportunity"),
    Partner: require("./partner"),
    RecordRef: require("./recordRef"),
    SalesOrder: require("./salesOrder"),
    Vendor: require("./vendor"),
    VendorBill: require("./vendorBill"),
    VendorPayment: require("./vendorPayment"),
    GetAllRecord: require("./getAllRecord"),
    JournalEntry: require("./journalEntry"),
};

module.exports = Types;
