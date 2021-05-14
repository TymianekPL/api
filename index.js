const API = require('./src');
const Client = new API.Client();
Client.Init(12345);
console.log(Client.token);