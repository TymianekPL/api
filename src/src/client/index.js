const socket = require('../socket/socket');
let token;
class Client {
     async Init(token) {
          this.token = token;
          return await socket.LetServerWork("/api/v/init?key=" + token);
     }
     token;
}

module.exports = Client;