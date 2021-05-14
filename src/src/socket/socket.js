const fetch = require("node-fetch");

class server {
    async LetServerWork(URL) {
        const HOST = "https://tymianek.mooo.com";
        const json = await fetch(HOST + URL).then(res => res.json())
        return json;
    }
}

module.exports = new server();