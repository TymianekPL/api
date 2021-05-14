class ServerException extends Error {
     constructor(args) {
          super(args);
          this.name = "Server Exception";
     }
}

module.exports.ServerException = ServerException;