const EventEmitter = require('events'); //class

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
log(message)
 {
    //sends hhtp request
    console.log(message);

    //raise an event
    this.emit('messagedLogged', {id: 1, url: 'http://'})
 }
} 


module.exports = Logger;