           require('dotenv').config();
const db = require('../../models/pg-config');

const retrieve_user_plants_generic = (input, callback) => {
        // input param should be or include the user.id
        const loggedInUser = input;

        db.any('SELECT * FROM api.plants, api.user_plant WHERE api.plants.id = api.user_plant.plant_id AND api.user_plant.user_id = $1', [loggedInUser]).then(user_plant_generic => {

            console.log(user_plant_generic);
            callback(user_plant_generic[0]);
        })
    .catch(function (error) {
        console.log(error);
    });
  };



module.exports = retrieve_user_plants_generic;
