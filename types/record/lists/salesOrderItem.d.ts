export = SalesOrderItem;
declare class SalesOrderItem extends Line {
    _listName: string;
}
import Line = require("./common/line");
