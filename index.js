const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(__dirname+'/html'));

io.on('connection', (socket) => {
  console.log('[+] User Connected.');

  // Send message to everyone else.
  socket.on('message', (message) => {
    console.log('[+] Received: "'+message+'"');
    io.emit('message', `${socket.id.substr(0,2)}: ${message}`);
  });
});

server.listen(3000, () => {
  console.log('listening on *: 3000')
});

