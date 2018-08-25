# node-suitetalk
NodeJs Suitetalk wrapper.

## Install

```bash
$ npm install --save node-suitetalk
```

## Usage

Get a customer:

```javascript
const NetSuite = require("node-suitetalk");
const Configuration = NetSuite.Configuration;
const Service = NetSuite.Service;
const Record = NetSuite.Record;

const config = new Configuration({
    account: "123456_SB1",
    apiVersion: "2018_1",
    credentials: {
        email: "email@netsuite.com",
        password: "netsuitepassword",
        role: "3",
    },
    wsdlPath: "./wsdl/WSDL_v2018_1_0/netsuite.wsdl",
});

const service = new Service(config);

service
    .init()
    .then((/*client*/) => { 

       const recordRef = new Record.Types.RecordRef();
       recordRef.internalId = 1234567;
       recordRef.type = "customer";
       
       return service.get(recordRef);
    }).then((result) => {
        console.log("result");
        console.log(JSON.stringify(result));
    
}).catch(function (err) {
    console.log("error");
    console.log(service.config.client.lastRequest);
    console.log("message");
    console.log(JSON.stringify(err));
});

```

## Discovery

Get role and account id using NetSuite credentials.

```javascript
const NetSuite = require("node-suitetalk");
const Util = NetSuite.Util;
const util = new Util();

util.getLoginOptions({
    email: "email@netsuite.com",
    password: "netsuitepassword",
}, (err, data) => {
    // Outputs login options for this account
    // will will use roles and
});
```

Import WSDL from NetSuite website, we pre-load the files to speed up requests.

```javascript
const NetSuite = require("node-suitetalk");
const Util = NetSuite.Util;
const util = new Util();

util.downloadWsdlToFolder({
    apiVersion: "2018_1",
    wsdlFolderPath: "./wsdl/NetSuite/", // Defaults to ./wsdl

}, (wsdlPath) => {

    // Callbacks the path to netsuite.wsdl

});
```

## Configuration

Either "credentials" or "token" are required to login, by default the credentials will be used.

* Options
  * `account` **Required**. NetSuite account ID.
  * `apiVersion` **Required**. API version. Example 2018_1.
  * `wsdlPath` **Required**. Path to wsdl folder or netsuite.wsdl file. A remote URI can also be used, but is much slower.
  * `credentials` Use NL_AUTH credentials.  
    * `email` **Required**. NetSuite user email.
    * `password` **Required**. NetSuite user password.
    * `role` NetSuite role ID. Example: '3' for administrator.
    * `applicationId` Application ID. "Manage Integrations" page in NetSuite.
  * `token` Use OAuth1.0 token.
    * `consumer_key` **Required**. Consumer Key. "Manage Integrations" page in NetSuite.
    * `consumer_secret` **Required**. Consumer Secret. "Manage Integrations" page in NetSuite.
    * `token_key` **Required**. Token Key."Manage Access Tokens" page in NetSuite.
    * `token_secret` **Required**. Token Secret. "Manage Access Tokens" page in NetSuite.

# Notes

Created as a module for another project. Some features still unavailable.

# License
GNU GPL see LICENSE.

**Use at your own discretion**

# Author
Felipe Chang <felipechang@hardcake.org> @mr_pepian
