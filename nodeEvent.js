// Importing the events module
const EventEmitter = require('events');

// Creating an instance of EventEmitter
const myEmitter = new EventEmitter();

// Adding an event listener
myEmitter.on('greet', (a) => {
  console.log('Hello there!',a);
});

// Emitting an event
myEmitter.emit('greet',"abhinav");

// Adding another event listener
myEmitter.on('customEvent', (arg1, arg2) => {
  console.log(`Received custom event with arguments: ${arg1} and ${arg2}`);
});

// Emitting another event with arguments
myEmitter.emit('customEvent', 'arg1value', 'arg2value');
