export default ServerException;
export class ServerException extends Error {
     constructor(args) {
          super((ServerExceptionEnum[parseInt(args)]).toString());
          this.name = "Server Exception";
     }
}

enum ServerExceptionEnum {
     Ok,
     NotFound = 10000,
     InternalError = 10001,
     UserNotFound = 10002,
     MissingArguments = 10003,
     InvalidArgument = 10004,
     Unknown = 0
}