           require('dotenv').config();
const db = require('../../models/pg-config');


//-----------------------------------THIS FILE IS FOR UPDATING DAILY PHYL/DEVICE DATA -----------------------

<<<<<<< 4b9c2e7f4a70f059630027e80e7f445b1c04886d
const retrieveMood = (input) => {
=======
const retrieveMood = (input, callback) => {
>>>>>>> [UPDATE] added retrieve_mood helper function

        // modify the 'something' below
        const loggedInUser = "b9d56128-8a35-4822-b744-2f57372fe44a";

        db.any('SELECT api.user_plant.plant_nickname, api.user_plant.mood_api FROM api.user_plant, api.users WHERE api.user_plant.user_id = api.users.id AND api.user_plant.user_id = $1', [loggedInUser]).then(healthState => {
                console.log(healthState);
        })
    .catch(function (error) {
        console.log(error);
    })
    }

retrieveMood();

module.exports = retrieveMood;
