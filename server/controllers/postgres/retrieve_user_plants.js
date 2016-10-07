           require('dotenv').config();
const db = require('../../models/pg-config');

const retrieve_user_plants = (input, callback) => {
        // input param should be or include the user.id
        const loggedInUser = input;

        db.any('SELECT * FROM api.user_plant WHERE api.user_plant.user_id = api.users.id AND api.user_plant.user_id = $1', [loggedInUser]).then(user_plants => {

            console.log(user_plants);
            callback(user_plants[0].device_id);

        })
    .catch(function (error) {
        console.log(error);
    });
  };



module.exports = retrieve_user_plants;
