var express = require('express');
var http = require('http');
var fs = require('fs');

// Setup the express app
var app = express();

// Create Server using the app and bind it to a port
var server = http.createServer(app).listen(8080);

// Static file serving
app.use("/", express.static("./"));
app.use("/", express.static("../"));

// Bind socket.io to the server
var io = require('socket.io').listen(server,  { 'destroy buffer size': Infinity });

// When a new socket connects
io.on('connection', function (socket) {
  var chunks = '';
  // Create terminal
  var terminal = require('child_process').spawn('gap');

  terminal.stdout.setNoDelay(true);
  terminal.stdout.setEncoding('utf8');
  terminal.stdout.allowHalfOpen == true

  terminal.stdout.on('data', function (chunk) {
    chunks += chunk;
    if (chunks.indexOf('gap>') !== -1) {
      socket.emit('data', chunks);
      console.log(chunks)
      chunks = '';
    }
  });

  terminal.stderr.on('data', function (data) {
    console.log(data.toString('utf8'));
  });

  terminal.on('exit', function (code) {
    console.log('disconnected')
    console.log('child process exited with code ' + code);
  });

  // Listen on the client and send any input to the terminal
  socket.on('input', function (data) {
    terminal.stdin.write(data + '\n');
  });

  // When socket disconnects, destroy the terminal
  socket.on("disconnect", function () {
    console.log('disconnected')
    terminal.stdin.end();
  });
});