//
//
//
//var io = require('socket.io');
//var net=require('net');
//
//
////var socket = net.createConnection('8088', 'localhost');
//var socket = net.connect({host:'localhost',port:'8088',path:'/MockACAEnrollmentVerificationHttpBinding'});
//socket.on('connect',function(data){
//    console.log('data: '+data);
//
//} );
//console.log('Socket created.');
//
////
////var socket = io.connect('http://localhost:8088/MockACAEnrollmentVerificationHttpBinding');
////socket.on('news', function (data) {
////    console.log(data);
////    socket.emit('my other event', { my: 'data' });
////});


var http = require('http');

var options = {
    hostname: 'localhost',
    port: 8088,
    path: '/MockACAEnrollmentVerificationHttpBinding',
    method: 'POST'
};


var req = http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
    });
});



// write data to request body
req.write('data\n');
req.write('data\n');
req.end();