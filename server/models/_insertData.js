<<<<<<< 5f598d0637864319328e8b087da0201d02b95931
=======
           require('dotenv').config({path: '../../.env'});

>>>>>>> [Update] Insert database with 107 plants data; add basic query function in models
const db = require('./pg-config');



//-----------------------------------THIS FILE IS FOR INSERTING LARGE AMOUNT OF PLANTS DATA----------------------------------------------------


<<<<<<< 5f598d0637864319328e8b087da0201d02b95931
for(let i of plantsData){

db.one("select * from users where name=$1", name)
    .then(function (user) {
        console.log(user); // print user object;
    })
    .catch(function (error) {
        // error;
    });
}

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
