
// const os = require('os');
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();
// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);



// const fs = require('fs');
// const files = fs.readdirSync('./');
// console.log(files);
// fs.readdir('$', function (err, files) {
//     if (err) console.log(`Error: ${err}`);
//     else console.log(`Result: ${files}`)
// });



// const EventEmitter = require('events');
// // const emitter = new EventEmitter();

// const Logger = require('./logger');
// const logger = new Logger();

// // register a listener
// logger.on('messaged logged!', (arg) => {
//     console.log('listener called!', arg);
// });

// logger.log('message'); 




// creating server object:
// http.server(function (req, res) {
//     res.write('Hello Dinesh!');
//     res.end();
// }).listen(8080);


// const http = require('http');
// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.write('Hellow Dinesh!!');
//         res.end();
//     }
//     if (req.url === '/dinesh/courses') {
//         res.write(JSON.stringify([1, 2, 2, 3, 4]));
//         res.end();
//     }
// });
// server.on('conection', (socket) => {
//     console.log('New connection!!!!!!!!');
// });
// server.listen(3000);
// console.log('Listening on port 3000.....');






// const http = require('http');
// const server = http.createServer((req, res)=> {
//     if (req.url === '/') {
//         res.write('Hellow Dinesh!!');
//         res.end();
//     }
//     if (req.url === '/api/courses') {
//         res.write(JSON.stringify([1, 2, 3, 4]));
//         res.end();
//     }
// });

// server.listen(8080);

// console.log('Listening!!!');




// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//   res.write('<input type="file" name="filetoupload"><br>');
//   res.write('<input type="submit">');
//   res.write('</form>');
//   return res.end();
// }).listen(8080);

// // console.log('What?');





























