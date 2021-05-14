import { Client } from '../client/index.js';
interface ClientEvents {
     message: string;
     ready: void;
}

export class BaseClient {
     public on<K extends keyof ClientEvents>(event: K, listener: (args: ClientEvents[K]) => void);
     public on(event: ClientEvents) {
          console.log(event);
     };
}