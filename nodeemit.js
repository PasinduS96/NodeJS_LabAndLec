
const events = require('events');

const emitter = new events.EventEmitter;

let eventHandler = () => console.log('Subscribing the event..');

emitter.on('event1',eventHandler); //Assigning event handeler to event

emitter.emit('event1'); //fire the event