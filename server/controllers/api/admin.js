///////////////    NODE MODULES    ///////////////
const express = require('express');
const router  = express.Router();
const fs      = require('fs');

//////////////    SERVER MODULES    //////////////
const admins  = require('./admins.json');


router.get('/', function(req, res) {
  res.send(admins);
});


module.exports = router;
