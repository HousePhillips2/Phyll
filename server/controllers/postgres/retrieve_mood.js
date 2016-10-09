const db = require('../../models/pg-config');

const retrieveMood = (input, callback) => {
        // input param should be or include the user.id
        const loggedInUser = input;

        db.any('SELECT api.user_plant.plant_nickname, api.user_plant.mood_api, api.user_plant.health, api.user_plant.health_light, api.user_plant.health_moisture FROM api.user_plant, api.users WHERE api.user_plant.user_id = api.users.id AND api.user_plant.user_id = $1', [loggedInUser]).then(healthState => {

                // gives you access to 'healthstate' -> an array, which contains at index [0] an object with the following properties:
                //(1) .plant_nickname --> STRING nickname of plant
                //(2) .mood_api       --> ARRAY containing a string representing the current condition of the plant
                //(3) .health         --> INTEGER between 1-5 representing the general plant health (hearts)
                //(4) .health_light   --> INTEGER between 1-10 representing the sunlight health of the plant
                //(5) .health_moisture -> INTEGER between 1-10 representing the moisture health of the plant

            callback(healthState[0].mood_api);

        })
    .catch(function (error) {
        console.log(error);

    });

  };



module.exports = retrieveMood;
