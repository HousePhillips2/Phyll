const apiai       = require('apiai');
const botsFamily  = {
  happy : apiai(process.env.HAPPY_BOT),
  thirsty: apiai(process.env.THIRSTY_BOT),
  drowning: apiai(process.env.DROWN_BOT),
  dark: apiai(process.env.DARK_BOT),
  burnt: apiai(process.env.BURNT_BOT)
};


let plantbot;
module.exports=function (io) {
  io.on('connection', function(socket){
    //once socket.io is connected 
    //make an api call to fetch plant status
    //diverse plantbot to handle client's questions based on plant status (i.e. happy, thirsty, drowning, burnt, dark)
    plantbot = botsFamily.happy;//now it's hard coded to happy
    io.emit('login','Hello');
    socket.on('client', function(msg){
      const request = plantbot.textRequest(msg);
      request.on('response', function(response) {
        //console.log(response.result.fulfillment.speech,'response from happybot');
        io.emit('plant',response.result.fulfillment.speech);
      });
      request.on('error', function(error) {
          console.log(error);
      });
      request.end();        
    });
  });
};