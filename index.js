const API = require('./src');
const Client = new API.Client();
Client.Init(12345).then(result => {
    console.log(result)
})