import socket = require('../socket/socket');
import Exceptions = require('../exception/index');
import Action = require('../event/event.js');
export class Client {
    token: any;
    public async Init(token) {
        this.token = token;
        var response = await socket.LetServerWork("/api/v/init?key=" + token);
        var ok = JSON.stringify(response);
        if (JSON.parse(ok)["response"]) {
            if (JSON.parse(ok)["response"] == "ok") return true;
        } else if (JSON.parse(ok)["error"]) {
            throw new Exceptions.ServerException(JSON.parse(ok)["error"]);
        } else {
            throw new Exceptions.ServerException("Empty response exception");
        }
    }
    public action() {
        return new Action.BaseClient().on;
    }
}