const socket = require('../socket/socket');
const Exceptions = require('../exception/index');
const Action = require('../event/event')
new Action.BaseClient().on('message', () => {

})
let token;
class Client {
    async Init(token) {
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
}

module.exports = Client;