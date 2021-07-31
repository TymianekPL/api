"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ServerException = void 0;
exports["default"] = ServerException;
var ServerException = /** @class */ (function (_super) {
    __extends(ServerException, _super);
    function ServerException(args) {
        var _this = _super.call(this, (ServerExceptionEnum[parseInt(args)]).toString()) || this;
        _this.name = "Server Exception";
        return _this;
    }
    return ServerException;
}(Error));
exports.ServerException = ServerException;
var ServerExceptionEnum;
(function (ServerExceptionEnum) {
    ServerExceptionEnum[ServerExceptionEnum["Ok"] = 0] = "Ok";
    ServerExceptionEnum[ServerExceptionEnum["NotFound"] = 10000] = "NotFound";
    ServerExceptionEnum[ServerExceptionEnum["InternalError"] = 10001] = "InternalError";
    ServerExceptionEnum[ServerExceptionEnum["UserNotFound"] = 10002] = "UserNotFound";
    ServerExceptionEnum[ServerExceptionEnum["MissingArguments"] = 10003] = "MissingArguments";
    ServerExceptionEnum[ServerExceptionEnum["InvalidArgument"] = 10004] = "InvalidArgument";
    ServerExceptionEnum[ServerExceptionEnum["Unknown"] = 0] = "Unknown";
})(ServerExceptionEnum || (ServerExceptionEnum = {}));
