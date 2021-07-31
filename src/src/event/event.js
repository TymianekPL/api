"use strict";
exports.__esModule = true;
exports.BaseClient = void 0;
var BaseClient = /** @class */ (function () {
    function BaseClient() {
    }
    //public on<K extends keyof ClientEvents>(event: K, listener: (args: ClientEvents[K]) => void);
    BaseClient.prototype.on = function (event) {
        console.log(event);
    };
    ;
    return BaseClient;
}());
exports.BaseClient = BaseClient;
