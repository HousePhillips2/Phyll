///////////////    NODE MODULES    ///////////////
const express = require('express');
const router  = express.Router();
//const db      = require('../../models/pg-config.js');
const {store_plant, update_plant, delete_plant} = require('../../models/plants.js');

router.get('/', (req, res) => {

  const plantData = {
    User: 'Phoebe',
    Water: 'Medium',
    Soil: 'pH 7.5',
    Light: 'Full Sun'
  };

  res.send(plantData);
});

router.post('/', (req, res) => {
  let plant_obj = req.body;
  //console.log(plant_obj, 'plant_obj');
  store_plant(plant_obj); //insert plant data into db
  res.send('success');
});

router.post('/update', (req, res) => {
  let plant_obj = req.body;
  //console.log(plant_obj, 'plant_obj in update route');
  update_plant(plant_obj); //update plant data into db
  res.send('success');
});

router.post('/delete', (req, res) => {
  let plant_obj = req.body;
  //console.log(plant_obj, 'plant_obj in delete route');
  delete_plant(plant_obj); //delete seleted plant in db
  res.send('success');
});

module.exports = router;


/*
Table: api.user_plant
  id: auto-generate (unique id for each plant);
  plant_id: foreign key to specific plant in api.plants table, coming from front-end
  user_id: plant owner, foreign key to id in api.users table, coming from front-end
  device_id: coming from plantForm
  plant_nickname: coming from plantForm
  plant_img: coming from plantForm
*/