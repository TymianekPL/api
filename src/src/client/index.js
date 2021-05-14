const socket = require('../socket/socket');

class Client {
     Init(ID) {
          console.log(socket.getKey("/api/v/example?key=" + ID));
     }
}

module.exports = Client;