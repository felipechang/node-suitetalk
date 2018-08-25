const Configuration = require("../app/configuration");
const Service = require("../app/service");
const Record = require("../app/record");

const credentials = require("./credentials");
const config = new Configuration(credentials);
const service = new Service(config);

service
    .init()
    .then((/*client*/) => {

        const customRecord = new Record.Types.CustomRecord();

        customRecord.typeId = 496;

        // Set regular fields
        const b1 = new Record.Fields.StringRef();
        b1.field = "name";
        b1.value = "test7";

        customRecord.bodyFieldList.push(b1);

        // Custom fields
        customRecord.customFieldList = new Record.Lists.CustomFieldList();

        const c1 = new Record.Fields.StringCustomFieldRef();
        c1.scriptId = "custrecord_conn_t1";
        c1.value = "this is a test";

        customRecord.customFieldList.customFields.push(c1);

        return service.add(customRecord);
    }).then((result) => {

    console.log("result");
    console.log(JSON.stringify(result));
    console.log(service.config.client.lastRequest);

}).catch(function (err) {

    console.log("error");
    console.log(service.config.client.lastRequest);
    console.log("message");
    console.log(JSON.stringify(err.root.Envelope.Body.Fault));
});