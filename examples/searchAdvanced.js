const Configuration = require("../app/configuration");
const Service = require("../app/service");
const Search = require("../app/search");
const Soap = require("../app/soap");

const credentials = require("./credentials");
const config = new Configuration(credentials);
const service = new Service(config);

service
    .init()
    .then((/*client*/) => {

        // Set request level preferences
        const preferences = new Soap.RequestPreferences();
        preferences.warningAsError = true;
        service.setRequestPreferences(preferences);

        // Set search preferences
        const searchPreferences = new Search.SearchPreferences();
        searchPreferences.pageSize = 100;
        service.setSearchPreferences(searchPreferences);

        // Create advanced search
        const search = new Search.Advanced.LocationSearchAdvanced();

        // Add criteria
        search.criteria = new Search.Advanced.LocationSearchRow();
        search.criteria.basic = new Search.Advanced.LocationSearchRowBasic();

        // Name contains 'warehouse'
        const nameStringField = new Search.Fields.SearchStringField();
        nameStringField.field = "name";
        nameStringField.operator = "contains";
        nameStringField.searchValue = "warehouse";
        search.criteria.basic.searchCriteriaFields.push(nameStringField);

        // Add columns
        search.columns = new Search.Advanced.LocationSearchRow();
        search.columns.basic = new Search.Advanced.LocationSearchRowBasic();

        // Internal ID column
        const internalIdSelectColumn = new Search.Fields.SearchColumnSelectField();
        internalIdSelectColumn.field = "internalId";
        search.columns.basic.searchColumnFields.push(internalIdSelectColumn);

        // Name column
        const nameStringColumn = new Search.Fields.SearchColumnStringField();
        nameStringColumn.field = "name";
        search.columns.basic.searchColumnFields.push(nameStringColumn);

        return service.search(search);
    }).then((result) => {

    console.log("result");
    console.log(JSON.stringify(result));

}).catch(function (err) {
    console.log("error");
    console.log(service.config.client.lastRequest);
    console.log("message");
    console.log(JSON.stringify(err));
});