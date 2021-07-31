const API = require('./src');
const Client = new API.Client();
Client.Init( "475fa74bb68102b0ca3a0a1123e82636" ).then( result => {
    console.log(result)
} );