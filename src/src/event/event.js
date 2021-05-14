"use strict";
exports.__esModule = true;
var BaseClient = /** @class */ (function () {
    function BaseClient() {
    }
    BaseClient.prototype.on = function (event) {
        console.log(event);
    };
    ;
    return BaseClient;
}());
exports.BaseClient = BaseClient;
