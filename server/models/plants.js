<<<<<<< f58f4ea9ce8c605e4cc9903a22f985365a7b2073
<<<<<<< 5f598d0637864319328e8b087da0201d02b95931
           require('dotenv').config( {path: '../../.env'});
const db = require('./pg-config');
const plantsData = require('../../src/records.js');// an array of arrays of plants data (107 records)

db.any("select plant_name from api.plants")// see below for field names in plants table
// db.any("select plant_name from api.plants", [true])// see below for field names in plants table
//   .then(function (data) {
//     console.log(data[0].plant_name);//print out the first plant name in the plants table
//   })
//   .catch(function (error) {
//       console.log(error);
//   });


//                    ***************  checking that all plants have a valid 'img' property ************
  // db.any("select plant_name, img from api.plants", [true])// see below for field names in plants table
  // .then(function (data) {
  //   console.log(data);//print out the first plant name in the plants table
  // })
  // .catch(function (error) {
  //     console.log(error);
  // });
=======
           require('dotenv').config({path: '../../.env'});

=======
>>>>>>> [feature] Add routes for device pings
const db = require('./pg-config');
const plantsData = require('../../src/records.js');// an array of arrays of plants data (107 records)

db.any("select plant_name from api.plants")// see below for field names in plants table
  .then(function (data) {
    //console.log(data[0].plant_name);//print out the first plant name in the plants table
  })
  .catch(function (error) {
      console.log(error);
  });
>>>>>>> [Update] Insert database with 107 plants data; add basic query function in models

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
