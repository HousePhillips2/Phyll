///////////////    NODE MODULES    ///////////////
const express = require('express');
const router  = express.Router();
const db      = require('../../models/pg-config.js');

router.get('/', function(req, res) {

  db.any("SELECT p.user_id, p.plant_id, p.device_id, p.plant_nickname, p.health, p.health_light, p.health_moisture, u.nickname, u.img, u.first_name, u.last_name, u.phone_number, s.plant_img, s.plant_name FROM api.user_plant p INNER JOIN api.users u on p.user_id = u.id INNER JOIN api.plants s on p.plant_id = s.id")
  .then(function (data) {
    let result = {};
    let final =[];
    for(let i=0;i<data.length;i++){ //limit one plant per user when send back user_plant obj; 
      let id = data[i].user_id;
      if(result[id]===undefined){
        result[id] = data[i];  
      }else{
        if(data[i].device_id!==''){ //select plant with device_id if there's one;
          result[id] = data[i];
        }
      }
    } 
    for(let key in result){ //re-map the array of user_plant objs;
      final.push(result[key]);
    }
    //console.log(result, 'result');
    res.send(final); //return user info with user's plant info
  })
  .catch(function (error) {
    console.log(error, 'get users data');
  });


});

module.exports = router;
