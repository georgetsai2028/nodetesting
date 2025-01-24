
const EventEmitter = require('events'); //class
const emitter = new EventEmitter(); //object

//Register a listener
emitter.on('messagedLogged', (arg) => {
    console.log('Listener called', arg);
});

//Raise an event
emitter.emit('messagedLogged', {id: 1, url: 'http://'});

//Raise an event called logging, send data: message
emitter.on('Logging', (arg) => {
    console.log('Logging data: ', arg)
})
emitter.emit('Logging',{data: 'message'});