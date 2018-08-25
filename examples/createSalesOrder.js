const Configuration = require("../app/configuration");
const Service = require("../app/service");
const Record = require("../app/record");

const credentials = require("./credentials");
const config = new Configuration(credentials);
const service = new Service(config);

service
    .init()
    .then((/*client*/) => {

        const salesOrderRecord = new Record.Types.SalesOrder();

        salesOrderRecord.externalId = "store-10001";

        const b0 = new Record.Fields.RecordRef();
        b0.field = "entity";
        b0.internalId = 345678;
        b0.type = "customer";

        const b1 = new Record.Fields.StringRef();
        b1.field = "orderStatus";
        b1.value = "_pendingFulfillment";

        const b2 = new Record.Fields.RecordRef();
        b2.field = "location";
        b2.internalId = 999;

        const b3 = new Record.Fields.FloatRef();
        b3.field = "shippingCost";
        b3.value = 0;

        const b4 = new Record.Fields.BooleanRef();
        b4.field = "isTaxable";
        b4.value = false;

        salesOrderRecord.bodyFieldList.push(b0, b1, b2, b3, b4);

        // Clear lists
        salesOrderRecord.nullFieldList = new Record.Lists.NullFieldList();
        salesOrderRecord.nullFieldList.names.push("salesRep");

        // Custom fields
        salesOrderRecord.customFieldList = new Record.Lists.CustomFieldList();

        const c1 = new Record.Fields.StringCustomFieldRef();
        c1.scriptId = "custbody_number";
        c1.value = "321321321";

        salesOrderRecord.customFieldList.customFields.push(c1);

        // Create Item List
        const salesOrderItemList = new Record.Lists.SalesOrderItemList();
        salesOrderItemList.replaceAll = true;

        // Create Item
        const salesOrderItem1 = new Record.Lists.SalesOrderItem();

        const a1 = new Record.Fields.RecordRef();
        a1.field = "item";
        a1.type = "account";
        a1.internalId = 99999;

        const a2 = new Record.Fields.DoubleRef();
        a2.field = "quantity";
        a2.value = 1;

        const a3 = new Record.Fields.RecordRef();
        a3.field = "price";
        a3.type = "priceLevel";
        a3.internalId = -1;

        const a4 = new Record.Fields.DoubleRef();
        a4.field = "amount";
        a4.value = 99.95;

        const a5 = new Record.Fields.DoubleRef();
        a5.field = "rate";
        a5.value = 99.95;

        const a6 = new Record.Fields.BooleanRef();
        a6.field = "isTaxable";
        a6.value = false;

        salesOrderItem1.bodyFieldList.push(a1, a2, a3, a4, a5, a6);

        const salesOrderItem2 = new Record.Lists.SalesOrderItem();

        const a7 = new Record.Fields.RecordRef();
        a7.field = "item";
        a7.type = "account";
        a7.internalId = 88888;

        const a8 = new Record.Fields.DoubleRef();
        a8.field = "quantity";
        a8.value = 2;

        const a9 = new Record.Fields.RecordRef();
        a9.field = "price";
        a9.type = "priceLevel";
        a9.internalId = -1;

        const a10 = new Record.Fields.DoubleRef();
        a10.field = "amount";
        a10.value = 30.00;

        const a11 = new Record.Fields.DoubleRef();
        a11.field = "rate";
        a11.value = 15.00;

        const a12 = new Record.Fields.BooleanRef();
        a12.field = "isTaxable";
        a12.value = false;

        salesOrderItem2.bodyFieldList.push(a7, a8, a9, a10, a11, a12);

        // Add Addressbook to list
        salesOrderItemList.list.push(salesOrderItem1, salesOrderItem2);

        // Add sublist to customer
        salesOrderRecord.lineList.push(salesOrderItemList);

        return service.add(salesOrderRecord);
    }).then((result) => {

    console.log("result");
    console.log(JSON.stringify(result));

}).catch(function (err) {
    console.log("error");
    console.log(service.config.client.lastRequest);
    console.log("message");
    console.log(JSON.stringify(err));
});