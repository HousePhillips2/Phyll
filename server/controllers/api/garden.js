///////////////    NODE MODULES    ///////////////
const express = require('express');
const router  = express.Router();
const db      = require('../../models/pg-config.js');

router.get('/', function(req, res) {

  db.any("SELECT p.user_id, p.plant_id, p.device_id, p.plant_nickname, p.health, p.health_light, p.health_moisture, u.nickname, u.img, u.first_name, u.last_name, u.phone_number, s.plant_img, s.plant_name FROM api.user_plant p INNER JOIN api.users u on p.user_id = u.id INNER JOIN api.plants s on p.plant_id = s.id")
  .then(function (data) {
    res.send(data); //return user info with user's plant info
  })
  .catch(function (error) {
    console.log(error, 'get users data');
  });


});

module.exports = router;
