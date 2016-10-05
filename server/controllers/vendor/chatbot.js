const apiai       = require('apiai');
const botsFamily  = {
  plantbot : apiai(process.env.PLANT_BOT),
  // thirsty: apiai(process.env.THIRSTY_BOT),
  // drowning: apiai(process.env.DROWN_BOT),
  // dark: apiai(process.env.DARK_BOT),
  // burnt: apiai(process.env.BURNT_BOT)
};

const retrieveMood = require('../postgres/retrieve_mood.js');

let plantbot;
let userId;
module.exports=function (io) {
  io.on('connection', function(socket){
    //once socket.io is connected 
    //make an api call to fetch plant status
    plantbot = botsFamily.plantbot;//
    socket.on('userId', function(id){
      userId = id;
    });
    socket.on('client', function(msg){
      const request = plantbot.textRequest(msg);
      request.on('response', function(response) {
        //diverse plantbot to handle client's questions based on plant status (i.e. fine, thirsty, drowning, burnt, dark)
        if(response.result.action!=='getStatus'){
          io.emit('plant',response.result.fulfillment.speech);
        } else {
          retrieveMood(userId, (healthstatus) =>{
            if(healthstatus){
              io.emit('plant', healthstatus[0]);
            } else {
              io.emit('plant', 'My friend Phyll is missing... Do you want to have one?');
            }
          });   
        }
      });
      request.on('error', function(error) {
          console.log(error);
      });
      request.end();        
    });
  });
};