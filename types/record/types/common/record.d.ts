export = Record;
declare class Record extends BaseObject {
    bodyFieldList: any[];
    lineList: any[];
    nullFields: any;
    customFields: any;
    externalId: any;
    internalId: any;
    _isCustomRecord: boolean;
    customFieldList: any;
}
import BaseObject = require("../../../baseObject");
