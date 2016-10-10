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


module.exports=function (io) {
  io.on('connection', (socket) => { //connect with socket.io
    let plantbot = botsFamily.plantbot;
    let userId;
    socket.on('userId', (id) => {
      userId = id;
    });
    socket.on('client', (msg) => {
      const request = plantbot.textRequest(msg);//connect with api.ai server: natural language process tool
      request.on('response', (response) => {
        //diverse plantbot to handle client's questions based on question types (i.e. small talks, plant health, plant identity)
        if(response.result.action === 'getStatus'){ //when client asks about plant's health
          retrieveMood(userId, (healthstatus) =>{ //query database to retrieve plant health info
            if(healthstatus){
              io.emit('plant', healthstatus[0]);
            } else {
              io.emit('plant', 'My friend Phyll is missing... It helps keep track of my health. Do you want to have one?');
            }
          });
        } else if (response.result.action === 'getName'){ //when client asks about plant's identity
          query_plant(userId, (plant) => { //query database to retrieve plant identity
            if(plant){
              io.emit('plant',`I am your ${plant[0].plant_nickname}`);
            } else {
              io.emit('plant', 'I will be your plantbot. But It seems like you haven\'t add your plant in our site. Could you like to add one?');
            }
          });
        } else { //when client is in small talk with plant
          io.emit('plant',response.result.fulfillment.speech); //defalt response from pre-build smalltalk domain

        }
      });

      request.on('error', (error) => {
          console.log(error, 'plant bot connection error');
      });

      request.end();
    });
  });
};
