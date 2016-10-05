const db = require('../../models/pg-config');


//-----------------------------------THIS FILE IS FOR UPDATING DAILY PHYL/DEVICE DATA -----------------------


const retrieveMood = (input, callback) => {

        // modify the 'something' below
        const loggedInUser = input;

        db.any('SELECT api.user_plant.plant_nickname, api.user_plant.mood_api FROM api.user_plant, api.users WHERE api.user_plant.user_id = api.users.id AND api.user_plant.user_id = $1', [loggedInUser]).then(healthState => {
            //console.log(healthState);
            callback(healthState[0].mood_api);
        })
    .catch(function (error) {
        console.log(error);
    });
  };



module.exports = retrieveMood;