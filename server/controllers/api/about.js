///////////////    NODE MODULES    ///////////////
const express     = require('express');
const router      = express.Router();
const fs          = require('fs');
const request     = require('request');
const parseString = require('xml2js').parseString;

//////////////    SERVER MODULES    //////////////
const admins      = require('./admins.json');


router.get('/', function(req, res) {

  var httpRequestOptions = {
    url: 'https://medium.com/feed/team-phyll'
  };

  request(httpRequestOptions, (error, response, body) => {
    parseString(body, (err, json) => {
      res.send(json);
    })
  })

});


module.exports = router;
