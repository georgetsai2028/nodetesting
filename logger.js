
console.log(__filename);
console.log(__dirname);
var url = 'http://mylogger.io/log';

function log(message)
{
    //sends hhtp request
    console.log(message);
}

module.exports = log;