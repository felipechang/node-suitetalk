const Configuration = require("../app/configuration");
const Service = require("../app/service");
const Record = require("../app/record");

const credentials = require("../credentials");
const config = new Configuration(credentials);
const service = new Service(config);

service
    .init()
    .then((/*client*/) => {

        const customerRecord = new Record.Types.Customer();

        customerRecord.internalId = 567575;

        const addressBookList = new Record.Lists.CustomerAddressbookList()
        addressBookList.replaceAll = 'false' // insert

        const addressBook = new Record.Lists.CustomerAddressbook()
        const defaultBilling = new Record.Fields.BooleanRef()
        defaultBilling.field = 'defaultBilling'
        defaultBilling.value = false
        addressBook.bodyFieldList.push(defaultBilling)

        const defaultShipping = new Record.Fields.BooleanRef()
        defaultShipping.field = 'defaultShipping'
        defaultShipping.value = false
        addressBook.bodyFieldList.push(defaultShipping)

        const addressRecord = new Record.Lists.Address()

        const addressee = new Record.Fields.StringRef()
        addressee.field = 'addressee'
        addressee.value = `Anthony Fukuoka (updated)`
        addressRecord.bodyFieldList.push(addressee)

        const addr1 = new Record.Fields.StringRef()
        addr1.field = 'addr1'
        addr1.value = `41 Roslyn Street`
        addressRecord.bodyFieldList.push(addr1)

        const city = new Record.Fields.StringRef()
        city.field = 'city'
        city.value = 'new city'
        addressRecord.bodyFieldList.push(city)

        const zip = new Record.Fields.StringRef()
        zip.field = 'zip'
        zip.value = '10261'
        addressRecord.bodyFieldList.push(zip)

        const country = new Record.Fields.StringRef()
        country.field = 'country'
        country.value = '_japan'
        addressRecord.bodyFieldList.push(country)

        addressBook.subRecordList.push(addressRecord) // addr record
        addressBookList.list.push(addressBook) // addr book list

        // const addressBook2 = new Record.Lists.CustomerAddressbook()
        // const addressRecord2 = new Record.Lists.Address()
        // addressRecord2.internalId = 1541055
        // addressBook2.subRecordList.push(addressRecord)
        // addressBookList.list.push(addressBook2) // addr book list

        customerRecord.lineList.push(addressBookList) // update customer

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
