const Configuration = require("../app/configuration");
const Service = require("../app/service");
const Record = require("../app/record");

const credentials = require("./credentials");
const config = new Configuration(credentials);
const service = new Service(config);

service
    .init()
    .then((/*client*/) => {

        const customerRecord = new Record.Types.Customer();

        customerRecord.internalId = 12437022;

        // // Custom fields
        customerRecord.customFieldList = new Record.Lists.CustomFieldList();

        const c1 = new Record.Fields.StringCustomFieldRef();
        c1.scriptId = "custentity_twitter";
        c1.internalId = "1566";
        c1.value = "@test";

        customerRecord.customFieldList.customFields.push(c1);

        // // Clear lists
        customerRecord.nullFieldList = new Record.Lists.NullFieldList();
        customerRecord.nullFieldList.names.push("salesRep");
        customerRecord.nullFieldList.names.push("custentity_item_restrictions");

        return service.update(customerRecord);
    }).then((result) => {

    console.log("result");
    console.log(JSON.stringify(result));
    console.log(service.config.client.lastRequest);

}).catch(function (err) {
    console.log("error");
    console.log(service.config.client.lastRequest);
    console.log("message");
    console.log(JSON.stringify(err));
});