var express = require('express');
var eapp = express();
var expressWs = require('express-ws')(eapp);
var os = require('os');
var pty = require('pty.js');

var terminals = {},
  logs = {};

eapp.use('/build', express.static(__dirname + '/node_modules/xterm/dist'));
eapp.use('/francy.js', express.static(__dirname + '/../francy-js/francy.js'));

eapp.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

eapp.get('/style.css', function (req, res) {
  res.sendFile(__dirname + '/style.css');
});

eapp.get('/main.js', function (req, res) {
  res.sendFile(__dirname + '/main.js');
});

eapp.post('/terminals', function (req, res) {
  var cols = parseInt(req.query.cols),
    rows = parseInt(req.query.rows),
    term = pty.spawn(process.platform === 'win32' ? 'gap.bat' : 'gap.sh', [], {
      name: 'xterm-color',
      cols: cols || 50,
      rows: rows || 20,
      cwd: process.env.PWD,
      env: process.env
    });

  console.log('Created terminal with PID: ' + term.pid);
  terminals[term.pid] = term;
  logs[term.pid] = '';
  term.on('data', function (data) {
    logs[term.pid] += data;
  });
  res.send(term.pid.toString());
  res.end();
});

eapp.post('/terminals/:pid/size', function (req, res) {
  var pid = parseInt(req.params.pid),
    cols = parseInt(req.query.cols),
    rows = parseInt(req.query.rows),
    term = terminals[pid];

  term.resize(cols, rows);
  console.log('Resized terminal ' + pid + ' to ' + cols + ' cols and ' + rows + ' rows.');
  res.end();
});

var chunks = '';
eapp.ws('/terminals/:pid', function (ws, req) {
  var term = terminals[parseInt(req.params.pid)];

  console.log('Connected to terminal ' + term.pid);
  ws.send(logs[term.pid]);

  term.on('data', function (data) {
    try {
      chunks += data;
      // just send the data when is complete
      // from complete we understand:
      // the gap> prompt is sent
      // the carriage return \r is sent
      if (chunks.indexOf('gap>') !== -1
        || chunks.indexOf('\r')) {
        ws.send(chunks);
        chunks = '';
      }
    } catch (ex) {
      // The WebSocket is not open, ignore
    }
  });
  ws.on('message', function (msg) {
    term.write(msg);
  });
  ws.on('close', function () {
    process.kill(term.pid);
    console.log('Closed terminal ' + term.pid);
    // Clean things up
    delete terminals[term.pid];
    delete logs[term.pid];
  });
});

var port = process.env.PORT || 3000,
  host = os.platform() === 'win32' ? '127.0.0.1' : '0.0.0.0';

console.log('App listening to http://' + host + ':' + port);
eapp.listen(port, host);

const {app, BrowserWindow} = require('electron');

let mainWindow;

if (app) {
  app.on('ready', () => {
    mainWindow = new BrowserWindow({
      height: 600,
      width: 800
    });

    mainWindow.setMenu(null);
    mainWindow.loadURL('http://localhost:3000/');
  });
}