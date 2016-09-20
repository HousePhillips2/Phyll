<<<<<<< 470215616f0d2c6eac64604545c03119c9a3c8f3
=======
<<<<<<< 5f598d0637864319328e8b087da0201d02b95931
           require('dotenv').config( {path: '../../.env'});
>>>>>>> [Update] Insert database with 107 plants data; add basic query function in models
const db = require('./pg-config');

function query_plant(userId, callback){
  db.any(`select * from api.user_plant where user_id = ${userId}`)
  .then((data) => {
    callback(data); //return user's plant data to front-end
  })
  .catch((error) => {
    //console.log('user plant does not exist');
    callback(false); // user's plant doest not exist, return false to front-end
  });
}

function store_plant(plant_obj){
  db.none('insert into api.user_plant (user_id, plant_id, device_id, plant_nickname) values($1, $2, $3, $4)', 
    [plant_obj.user_id, plant_obj.plant_id, plant_obj.device_id, plant_obj.plant_nickname])
  .catch((error) => {
    console.log(error,'insert plant form data error');
  });
  db.none('update api.users set phone_number = $1 where id = $2', [plant_obj.phone, plant_obj.user_id])
  .catch((error) => {
    console.log(error, 'insert user phone number error');
  });
}

module.exports = {query_plant, store_plant};

//  ---------------------------  checking that all plants have a valid 'img' property --------------------
  // db.any("select plant_name, img from api.plants", [true])// see below for field names in plants table
  // .then(function (data) {
  //   console.log(data);//print out the first plant name in the plants table
  // })
  // .catch(function (error) {
  //     console.log(error);
  // });
=======
           require('dotenv').config({path: '../../.env'});

const db = require('./pg-config');
const plantsData = require('../../src/records.js');// an array of arrays of plants data (107 records)

db.any("select plant_name from api.plants", [true])// see below for field names in plants table
  .then(function (data) {
    //console.log(data[0].plant_name);//print out the first plant name in the plants table
  })
  .catch(function (error) {
      console.log(error);
  });
>>>>>>> [Update] Insert database with 107 plants data; add basic query function in models

<<<<<<< 470215616f0d2c6eac64604545c03119c9a3c8f3

/*
Table: plants

  plant_name:
  plant_family:
  water_L:
  soil_pH:
  light_L:
  img:
  light_S:
  water_S:
  soil_S:
  soil_L:
  fertilizer_S:
  fertilizer_L:
  repotting:
  humidity_S:
  humidity_L:
  poisonous_S:
  poisonous_L:
  type: null
*/

/*
Table: user_plant

  user_id:
  plant_id:
  device_id:
  plant_nickname:
  plant_img
  id:
*/
=======
  /*
  Table; plants
    plant_name:
<<<<<<< 5f598d0637864319328e8b087da0201d02b95931
    plant_family:
    water_L:
    soil_pH:
    light_L:
    img:
    light_S:
    water_S:
    soil_S:
    soil_L:
    fertilizer_S:
    fertilizer_L:
    repotting:
    humidity_S:
    humidity_L:
    poisonous_S:
    poisonous_L:
    type: null
  */
=======
    plant_family: 
    water_L: 
    soil_pH: 
    light_L: 
    img: 
    light_S: 
    water_S: 
    soil_S: 
    soil_L: 
    fertilizer_S: 
    fertilizer_L: 
    repotting: 
    humidity_S: 
    humidity_L: 
    poisonous_S: 
    poisonous_L: 
    type: null 
  */
>>>>>>> [Update] Insert database with 107 plants data; add basic query function in models
>>>>>>> [Update] Insert database with 107 plants data; add basic query function in models
