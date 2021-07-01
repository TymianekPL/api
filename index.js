const API = require('./src');
const Client = new API.Client();
Client.Init(1).then(result => {
    console.log(result)
});
