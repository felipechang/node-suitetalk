const Configuration = require("../app/configuration");
const Service = require("../app/service");
const Search = require("../app/search");

const credentials = require("./credentials");
const config = new Configuration(credentials);
const service = new Service(config);

service
    .init()
    .then((/**/) => {

        // Set search preferences
        const searchPreferences = new Search.SearchPreferences();
        searchPreferences.pageSize = 100;
        service.setSearchPreferences(searchPreferences);

        // Create basic search
        const search = new Search.Basic.LocationSearchBasic();

        const nameStringField = new Search.Fields.SearchStringField();
        nameStringField.field = "name";
        nameStringField.operator = "contains";
        nameStringField.searchValue = "sweet";

        search.searchFields.push(nameStringField);

        return service.search(search);
    }).then((result, raw, soapHeader) => {

    console.log("result");
    console.log(JSON.stringify(result));


}).catch(function (err) {
    console.log("error");
    console.log(service.config.client.lastRequest);
    console.log("message");
    console.log(JSON.stringify(err));
});