const path = require('path')

module.exports = {
    account: '',
    apiVersion: '',
    accountSpecificUrl: true,
    token: {
        consumer_key: '',
        consumer_secret: '',
        token_key: '',
        token_secret: ''
    },
    wsdlPath: path.resolve(__dirname, './WSDL_v2020_2_0/netsuite.wsdl'),
}
