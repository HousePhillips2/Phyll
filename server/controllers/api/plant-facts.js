///////////////    NODE MODULES    ///////////////
const express = require('express');
const router  = express.Router();
const db      =require('../../models/pg-config.js');

router.post('/', (req, res) => {
  
  let name = req.body.plant;
  db.any("select * from api.plants where plant_name = $1",[name])// see below for field names in plants table
  .then((data) => {
    //console.log(data);
    res.send(data);
  })
  .catch((error)=> {
    console.log(error);
  });
});

router.get('/', (req,res) => {
  db.any('select plant_name from api.plants')
  .then((data) =>{
    res.send(data);
  })
  .catch((error) =>{
    console.log(error);
  });
});

module.exports = router;
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
