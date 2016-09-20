<<<<<<< 5f598d0637864319328e8b087da0201d02b95931
=======
           require('dotenv').config({path: '../../.env'});

>>>>>>> [Update] Insert database with 107 plants data; add basic query function in models
const db = require('./pg-config');



//-----------------------------------THIS FILE IS FOR INSERTING LARGE AMOUNT OF PLANTS DATA----------------------------------------------------


<<<<<<< 470215616f0d2c6eac64604545c03119c9a3c8f3
// for(let i of plantsData){

// db.one("select * from users where name=$1", name)
//     .then(function (user) {
//         console.log(user); // print user object;
//     })
//     .catch(function (error) {
//         // error;
//     });
// }


// ------------------------- Manually add user plants --------------------------- //

let userPlants = [
  {
// id: '',
bot_api: [],
daily_moisture: [],
daily_light: [],
phyll_id: "02:a3:a4:2a:1f:95",
plant_health: 5,
plant_img: 'http://i.imgur.com/jowP6zY.jpg',
plant_nickname: 'Black-Widow',
plant_type: '4d5eec74-fc07-4728-90db-3afb12ba121a',
user_id: '92b2c2ee-76fa-4461-b14e-31abcce41c2b'
  },
  {
// id: '',
bot_api: [],
daily_moisture: [],
daily_light: [],
phyll_id: "02:a3:a4:2a:1f:95",
plant_health: 5,
plant_img: 'http://i.imgur.com/ve1eYcB.jpg',
plant_nickname: 'War-and-Peace',
plant_type: 'd4e70727-438e-40f5-b99e-63ace4335283',
user_id: ''
  }
]

for(let i of user_plants){
=======
<<<<<<< 5f598d0637864319328e8b087da0201d02b95931
for(let i of plantsData){
>>>>>>> [Update] Insert database with 107 plants data; add basic query function in models

db.one("select * from users where name=$1", name)
    .then(function (user) {
        console.log(user); // print user object;
    })
    .catch(function (error) {
        // error;
    });
}
<<<<<<< 470215616f0d2c6eac64604545c03119c9a3c8f3
=======

=======
for(let i of plantsData){ 
  db.none("insert into api.plants(plant_name, plant_family, water_s, water_l, soil_ph, soil_s, soil_l, light_s, light_l, fertilizer_s, fertilizer_l, humidity_s, humidity_l, poisonous_s, poisonous_l, repotting, type, img) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18)", i)
    .then( () => {
      console.log('success');
    })
    .catch( (error) => {
      console.log(error);
    });
}
>>>>>>> [Update] Insert database with 107 plants data; add basic query function in models
>>>>>>> [Update] Insert database with 107 plants data; add basic query function in models
