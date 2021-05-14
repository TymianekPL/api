class server {
     async getKey(URL) {
          var resp = "";
          const HOST = "tymianek.mooo.com";
          const http = require('https');

          const options = {
               host: HOST,
               path: URL,
               method: 'GET',
          };
          await makeRequest();
          return resp;
          async function makeRequest() {
               const json = await fetch("tymianek.mooo.com").then(res => res.json()); // fetch the JSON from the API
               resp = JSON;
               console.log(json.a.b.c);
          }
     }
}

module.exports = new server();