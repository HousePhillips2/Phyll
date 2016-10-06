const apiai       = require('apiai');
const botsFamily  = {
  plantbot : apiai(process.env.PLANT_BOT),
  // thirsty: apiai(process.env.THIRSTY_BOT),
  // drowning: apiai(process.env.DROWN_BOT),
  // dark: apiai(process.env.DARK_BOT),
  // burnt: apiai(process.env.BURNT_BOT)
};
const retrieveMood = require('../postgres/retrieve_mood.js');
const {query_plant} = require ('../../models/plants.js');

let plantbot;
let userId;
module.exports=function (io) {
  io.on('connection', function(socket){
    //once socket.io is connected 
    plantbot = botsFamily.plantbot;
    socket.on('userId', function(id){
      userId = id;
    });
    socket.on('client', function(msg){
      const request = plantbot.textRequest(msg);
      request.on('response', function(response) {
        //diverse plantbot to handle client's questions based on question types (i.e. small talks, plant health, plant name)
        if(response.result.action === 'getStatus'){
          retrieveMood(userId, (healthstatus) =>{
            if(healthstatus){
              io.emit('plant', healthstatus[0]);
            } else {
              io.emit('plant', 'My friend Phyll is missing... Do you want to have one?');
            }
          });
        } else if (response.result.action === 'getName'){
          query_plant(userId, (plant) => {
            //console.log(plant, 'plant');
            if(plant){
              io.emit('plant',`I am your ${plant[0].plant_nickname}`);
            } else {
              io.emit('plant', 'I will be your plantbot. But It seems like you haven\'t add your plant in our site. Could you like to add one?');
            }
          });
        } else {
          io.emit('plant',response.result.fulfillment.speech);
        }
      });

      request.on('error', function(error) {
          console.log(error, 'plant bot connection error');
      });

      request.end();        
    });
  });
};
