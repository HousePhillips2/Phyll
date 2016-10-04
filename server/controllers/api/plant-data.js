///////////////    NODE MODULES    ///////////////
const express = require('express');
const router  = express.Router();
const db      = require('../../models/pg-config.js');

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
  
  let plantName = req.body.plantName;
  let plantNickName = req.body.plantNickName;
  let plantId = req.body.plantId;
  let user_name = req.body.user_name;
  let email = req.body.email;
  let oauth_key = req.body.oauth_key;
  let user_img = req.body.user_img;
  let deviceId = req.body.deviceId;
  let plant_img = req.body.plant_img;
  //console.log(req.body);
  //to add user plant input into database
  //db.one with return result;
  //db.none with no return result;
  db.one("insert into api.users(user_name, email, oauth_key,img) values($1, $2, $3, $4) returning id", [user_name, email,oauth_key,user_img])
    .then((user_data) => {
        let user_id = user_data.id; // returning user id from user table
        db.none("insert into api.user_plant(plant_id, user_id, device_id, plant_img, plant_nickname) values($1, $2, $3, $4, $5)", [plantId, user_id,deviceId,plant_img, plantNickName])
        .then(()=>{
          res.send('Success!');
        }).
        catch((error)=>{
          console.log("PLANT DATA INSERT ERROR:", error);
        });
    })
    .catch((error)=>{
        console.log("USER DATA INSERT ERROR:", error); 
  });

});

module.exports = router;

  /*
  Table: api.users
    id: auto-generate (unique id for each plant);
    user_name:
    email:
    oauth_key:
    img:
  */

  /*
  Table: api.user_plant
    id: auto-generate (unique id for each plant);
    plant_id: foreign key to specific plant in api.plants table
    user_id: plant owner, foreign key to id in api.users table
    device_id:
    plant_nickname: coming from plantForm
    plant_img: coming from plantForm
  */