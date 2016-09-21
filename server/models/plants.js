const db = require('./pg-config');
const plantsData = require('../../src/records.js');// an array of arrays of plants data (107 records)

db.any("select plant_name from api.plants", [true])// see below for field names in plants table
  .then(function (data) {
    //console.log(data[0].plant_name);//print out the first plant name in the plants table
  })
  .catch(function (error) {
      console.log(error);
  });

  /*
  Table; plants
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