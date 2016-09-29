const express     = require('express');
const app         = express();
const http        = require('http').Server(app);
const io          = require('socket.io')(http);

io.on('connection', function(socket){
  console.log('a user connected');
  socket.emit('login','Hello, beautiful!'); //on client side, socket.on('login', (msg)=>{ $('<li>'').text(msg) })
  socket.on('chat message', function(msg){
    if (msg ==='Hello!') {
      io.emit('chat message', 'What a wonderful day, Phoebe!');
    } else if (msg ==='Who are you?') {
      io.emit('chat message', 'I\'m Eric!');
    } else if (msg === 'What are you doing?') {
      io.emit('chat message', 'In a meeting with Benji');
    } else if (msg === 'Are you a robot?') {
      io.emit('chat message', 'No, I am Eric!');
    } else {
      io.emit('chat message', 'I don\'t understand you');
    }
    
  });

});