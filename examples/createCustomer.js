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

        // Set regular fields
        const b1 = new Record.Fields.BooleanRef();
        b1.field = "isPerson";
        b1.value = true;

        const b2 = new Record.Fields.StringRef();
        b2.field = "firstName";
        b2.value = "TESTJohnSample2";

        const b3 = new Record.Fields.StringRef();
        b3.field = "lastName";
        b3.value = "Doe";

        customerRecord.bodyFieldList.push(b1, b2, b3);

        // // Clear lists
        customerRecord.nullFieldList = new Record.Lists.NullFieldList();
        customerRecord.nullFieldList.names.push("salesRep");

        // Custom fields
        customerRecord.customFieldList = new Record.Lists.CustomFieldList();

        const c1 = new Record.Fields.StringCustomFieldRef();
        c1.scriptId = "custentity_twitter";
        c1.value = "@test";

        customerRecord.customFieldList.customFields.push(c1);

        // Create Addressbook List
        const addressBookList = new Record.Lists.CustomerAddressbookList();
        addressBookList.replaceAll = true;

        // Create Addressbook
        const addressBook = new Record.Lists.CustomerAddressbook();

        // Addressbook body
        const a1 = new Record.Fields.BooleanRef();
        a1.field = "defaultBilling";
        a1.value = true;

        const a2 = new Record.Fields.BooleanRef();
        a2.field = "isResidential";
        a2.value = true;

        const a3 = new Record.Fields.BooleanRef();
        a3.field = "defaultShipping";
        a3.value = true;

        addressBook.bodyFieldList.push(a1, a2, a3);

        // Addressbook subrecord
        const address = new Record.Lists.Address();

        const s1 = new Record.Fields.StringRef();
        s1.field = "addressee";
        s1.value = "John Doe";

        const s2 = new Record.Fields.StringRef();
        s2.field = "addr1";
        s2.value = "11 Fake Rd";

        const s3 = new Record.Fields.StringRef();
        s3.field = "city";
        s3.value = "Beverly Hills";

        const s4 = new Record.Fields.StringRef();
        s4.field = "zip";
        s4.value = "90210";

        const s5 = new Record.Fields.StringRef();
        s5.field = "state";
        s5.value = "CA";

        const s6 = new Record.Fields.StringRef();
        s6.field = "country";
        s6.value = "_unitedStates";

        address.bodyFieldList.push(s1, s2, s3, s4, s5, s6);

        // Add subrecord to addressbook
        addressBook.subRecordList.push(address);

        // Add Addressbook to list
        addressBookList.list.push(addressBook);

        // Add sublist to customer
        customerRecord.lineList.push(addressBookList);

        return service.add(customerRecord);
    }).then((result) => {

    console.log("result");
    console.log(JSON.stringify(result));

}).catch(function (err) {

    console.log("error");
    console.log(service.config.client.lastRequest);
    console.log("message");
    console.log(JSON.stringify(err));
});