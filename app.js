
const EventEmitter = require('events'); //class

const Logger = require('./logger');
const logger = new Logger();

logger.on('messagedLogged', (arg) => {
    console.log('Listener called', arg);
});

logger.log('message');