const socket = require('../socket/socket');

class Client {
     Init(ID) {
          console.log(socket.LetServerWork("/api/v/example?key=" + ID));
     }
}

module.exports = Client;