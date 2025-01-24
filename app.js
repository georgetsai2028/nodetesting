
const EventEmitter = require('events'); //class
const emitter = new EventEmitter(); //object

//Register a listener
emitter.on('messagedLogged', function(){
    console.log('Listener called');
})
emitter.emit('messagedLogged');