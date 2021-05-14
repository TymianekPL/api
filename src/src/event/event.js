"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var index_js_1 = require("../client/index.js");
var BaseClient = /** @class */ (function (_super) {
    __extends(BaseClient, _super);
    function BaseClient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseClient.prototype.on = function (event) {
        console.log(event);
    };
    ;
    return BaseClient;
}(index_js_1.Client));
exports.BaseClient = BaseClient;
