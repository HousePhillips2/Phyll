///////////////    NODE MODULES    ///////////////
const express = require('express');
const router  = express.Router();
const db      = require('../../models/pg-config.js');

router.get('/', function(req, res) {

db.any("select * from api.user_plant")// select all plants in database
  .then(function (plants) {
    res.send(plants);
  })
  .catch(function (error) {
      console.log(error);
  });

// // ----------------------------- select plant id, and the related water/soil requirements ------//
// var x = '4a3ebc64-fc17-4728-90db-3afbf2ba421a';
// db.any('SELECT api.users_plants.id, api.plants.water_s, api.plants.soil_s FROM api.users_plants, api.plants WHERE api.users_plants.plant_type = api.plants.id AND api.users_plants.id = $1', [x]).then(plants => {
//   console.log(plants);
// })
// .catch(function (error) {
//     console.log(error);
// });


});

module.exports = router;
