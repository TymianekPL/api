# api

## Setup

### Setup your application

* open [Developers portal](https://tymianek.mooo.com/api/user/apps)
* Create application by clicking `create`
* copy bot token

### Node js

* Run `git clone https://github.com/TymianekPL/api.git` in the terminal
* Create index.js file
* write code above to index.js

```js
const API = require('./src');
const Client = new API.Client();
Client.Init('TOKEN').then(result => {
    console.log(result)
});
```

* replace 'TOKEN' with your bot token
* inside comments write some code
* test your app

## What next

[Read docs](https://tymianek.mooo.com/api/user/docs/)
