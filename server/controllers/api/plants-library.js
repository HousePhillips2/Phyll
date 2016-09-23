///////////////    NODE MODULES    ///////////////
const express = require('express');
const router  = express.Router();
const db      = require('../models/pg-config.js');

router.get('/', function(req, res) {

db.any("select * from api.plants")// select all plants in database
  .then(function (plants) {
    res.send(plants);
  })
  .catch(function (error) {
      console.log(error);
  });

});

module.exports = router;
