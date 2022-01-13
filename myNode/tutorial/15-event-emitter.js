// event-driven programming
// the flow on the program is, at least in part, determined by the events that occure as the program executes.

// Used Hevily in Node.js !!

console.log('Welcome to Node Tutorial')

const EventEmitter = require('events');

const customEmitter = new EventEmitter()

// on   - listen for an event
// emit - emit an event

customEmitter.on('response',()=>{ //name of the event is response
    console.log(`data received `);
}) 

customEmitter.emit('response') 

// the order matters!! You first listen and then emit.
// it makes no sence to listen to the event once it's already emitted