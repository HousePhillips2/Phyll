const db = require('./pg-config');

function query_plant(userId, callback){
  db.any('select * from api.user_plant where user_id = $1', [userId])
  .then((data) => {
    callback(data); //return user's plant data to front-end
  })
  .catch((error) => {
    //console.log('user plant does not exist');
    callback(false); // user's plant doest not exist, return false to front-end
  });
}

function store_plant(plant_obj){
  db.none('insert into api.user_plant (user_id, plant_id, plant_img, device_id, plant_nickname) values($1, $2, $3, $4, $5)', 
    [plant_obj.user_id, plant_obj.plant_id, plant_obj.plant_img, plant_obj.device_id, plant_obj.plant_nickname])
  .catch((error) => {
    console.log(error,'insert plant form data error');
  });
  db.none('update api.users set phone_number = $1 where id = $2', [plant_obj.phone, plant_obj.user_id])
  .catch((error) => {
    console.log(error, 'insert user phone number error');
  });
}

function update_plant(plant_obj){
  db.none('update api.users set phone_number = $1 where id = $2', [plant_obj.phone, plant_obj.user_id])
  .catch((error) => {
    console.log(error, 'update phone number error');
  });
  db.none('update api.user_plant set device_id = $1, plant_nickname = $2 where user_id = $3', [plant_obj.device_id, plant_obj.plant_nickname, plant_obj.user_id])
  .catch((error) => {
    console.log(error, 'update user plant data error');
  });
}

function delete_plant(plant_obj){
  db.result("delete from api.user_plant where device_id = $1", [plant_obj.device_id])
  .then(function (result) {
    //console.log(result.rowCount, 'in delete function'); // print how many records were deleted;
  })
  .catch(function (error) {
      console.log(error, 'delete user plant error');
  });
}

module.exports = {query_plant, store_plant, update_plant, delete_plant};

//  ---------------------------  checking that all plants have a valid 'img' property --------------------
  // db.any("select plant_name, img from api.plants", [true])// see below for field names in plants table
  // .then(function (data) {
  //   console.log(data);//print out the first plant name in the plants table
  // })
  // .catch(function (error) {
  //     console.log(error);
  // });


/*
Table: plants

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

/*
Table: user_plant

  user_id:
  plant_id:
  device_id:
  plant_nickname:
  plant_img
  id:
*/
