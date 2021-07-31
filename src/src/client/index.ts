import socket = require('../networking/socket');
import Exceptions = require('../exception/index');
import Action = require('../event/event.js');
export default Client;
export class Client {
    constructor() {
        return this;
    }
    token: string;
    public async Init(token: string) {
        this.token = token;
        var response = await socket.LetServerWork("/api/dev/get-user?token=" + token);
        var ok = JSON.stringify(response);
        if (JSON.parse(ok)["code"]) {
            throw new Exceptions.ServerException(JSON.parse(ok)["code"]);
        }

        return true;
    }
    public action() {
        return new Action.BaseClient().on;
    }
}