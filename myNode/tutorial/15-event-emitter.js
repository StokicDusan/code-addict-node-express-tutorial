// Event-driven programming
// the flow on the program is, at least in part, 
// determined by the events that occure as the program executes.

// Used Hevily in Node.js !!

// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance

console.log('Welcome to Node Tutorial')

const EventEmitter = require('events');

const customEmitter = new EventEmitter()

// on   - listen for an event
// emit - emit an event

customEmitter.on('response',(name,id)=>{ //name of the event is response
    console.log(`data received user ${name} with id :${id}`);
})
customEmitter.on('response',()=>{
    console.log(`some other logic `);
})

customEmitter.emit('response','dusan',28) 

// the order matters!! You first listen and then emit.
// it makes no sence to listen to the event once it's already emitted
