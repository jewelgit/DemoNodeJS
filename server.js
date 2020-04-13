const fs = require('fs');
fs.writeFileSync('hello.txt' , 'This is my first Practice');
console.log(fs.readFileSync('hello.txt').toString());

var path = require('path');
var p = 'C:/Users/abhij/Desktop/NodeJs/Practice_NodeJS/Day2/hello.txt'
console.log(path.dirname(p));
console.log(path.basename(p));
console.log(path.extname(p));
console.log(path.isAbsolute(p));

var buf1 = Buffer.from('123456789');
var buf2 = Buffer.from('Hello');
buf2.copy(buf1, 2);
console.log(buf1.toString());
console.log(Buffer.concat([buf1, buf2]).toString());
console.log(buf1.equals(buf2));
console.log(Buffer.compare(buf1, buf2));

var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'test/plain'});
    res.write('Hello World!');
    res.end();
}).listen(8080);

var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2020&month=April';
var q = url.parse(adr, true);
console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var util = require('util');
var txt = 'Congratulations %s on his %dth birthday!';
var result = util.format(txt, 'John', 11);
console.log(result);

var os = require('os');
console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());

chalk = require('chalk');
console.log(chalk.green('I am a green line' +
chalk.blue.underline.bold(' with a blue substring') +' that becomes green again!'));
console.log('Good Bye');