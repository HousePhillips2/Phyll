///////////////    NODE MODULES    ///////////////
const express = require('express');
const router  = express.Router();
const db      = require('../../models/pg-config.js');

router.get('/', function(req, res) {

  db.any("select * from api.user_plant, api.users where api.users.id = api.user_plant.user_id")
  .then(function (data) {
    res.send(data); //return user info with user's plant info
  })
  .catch(function (error) {
    console.log(error, 'get users data');
  });


});

module.exports = router;
