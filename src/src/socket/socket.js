const fetch = require("node-fetch");

class server {
     async LetServerWork(URL) {
          var resp = "";
          const HOST = "https://tymianek.mooo.com";
          const json = await fetch(HOST + URL).then(res => res.json())
          console.log(json);
          return json;
     }
}

module.exports = new server();