var express = require('express');
var http = require('http');
var fs = require('fs');

// Setup the express app
var eapp = express();

// Create Server using the app and bind it to a port
var server = http.createServer(eapp).listen(3000);

// Static file serving
eapp.use("/", express.static("./"));
eapp.use("/", express.static("../francy-js/lib/"));

// Bind socket.io to the server
var io = require('socket.io').listen(server, {'destroy buffer size': Infinity});

// When a new socket connects
io.on('connection', function (socket) {
  var chunks = '';
  // Create terminal
  var terminal = require('child_process').spawn('gap');

  terminal.stdout.setNoDelay(true);
  terminal.stdout.setEncoding('utf8');
  terminal.stdout.allowHalfOpen == true;

  terminal.stdout.on('data', function (chunk) {
    chunks += chunk;
    if (chunks.indexOf('gap>') !== -1) {
      socket.emit('data', chunks);
      chunks = '';
    }
  });

  terminal.stderr.on('data', function (data) {
    console.log(data.toString('utf8'));
  });

  terminal.on('exit', function (code) {
    console.log('child process exited with code ' + code);
  });

  // Listen on the client and send any input to the terminal
  socket.on('input', function (data) {
    terminal.stdin.write(data + '\n');
  });

  // When socket disconnects, destroy the terminal
  socket.on("disconnect", function () {
    terminal.stdin.end();
  });
});

const {app, BrowserWindow} = require('electron');

let mainWindow;

if (app) {
  app.on('ready', () => {

    mainWindow = new BrowserWindow({
      height: 600,
      width: 800,
      webPreferences: { nodeIntegration: false }
    });

    mainWindow.setMenu(null);
    mainWindow.loadURL('http://localhost:3000/');
  });
}