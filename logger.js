// const EventEmitter = require('events');
// // const emitter = new EventEmitter();

// var url = 'http://dinesh.io/log';

// class Logger extends EventEmitter {
//     log(message) {
//         //send an http request
//         console.log(message);
    
//         // Raising event
//         this.emit('messaged logged!', { id: 1, url: 'dinesh.com'});
//     }    
// }

// module.exports = Logger;

function logger(req, res) {
    console.log('Working...!');
};

module.exports = logger;
