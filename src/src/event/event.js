"use strict";
exports.__esModule = true;
exports.BaseClient = void 0;
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
