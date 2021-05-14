const c = require('../client/index.js');
interface ClientEvents {
     message: string;
}

export class BaseClient extends c.Client {
     public on<K extends keyof ClientEvents>(event: K, listener: (args: ClientEvents[K]) => void);
     public on(event: ClientEvents) {

     };
}