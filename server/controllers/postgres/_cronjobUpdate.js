           require('dotenv').config();
const db = require('../../models/pg-config');


//-----------------------------------THIS FILE IS FOR UPDATING DAILY PHYL DATA -----------------------


const cronUpdate = (req, res) => {

    const incomingData = req.body;
    console.log('incoming', incomingData);
    for (let device in incomingData){

        let deviceId = incomingData[device].deviceId,
              moist    = incomingData[device].moisture,
              light    = incomingData[device].light,
              phyll = incomingData[device];
              // deviceId2 = incomingData['device2'].deviceId,
              // moist2    = incomingData['device2'].moisture,
              // light2    = incomingData['device2'].light;
        // console.log('ONE', deviceId, moist, light);

        db.any('SELECT api.users_plants.id, api.plants.water_s, api.plants.light_s FROM api.users_plants, api.plants WHERE api.users_plants.plant_type = api.plants.id AND api.users_plants.device_id = $1', [deviceId]).then(plant => {
            // console.log(plants);
            console.log('resultat', plant, phyll);
            // plant has it's (1) id (2) water_s (3)light_s
            //phyll has its (1) deviceId (2) light array (3) moisture array
            let healthFlag = false;
            let condition = '';
            const conditioner = plant => {

                // check the water, and adjust condition if necessary
                if (plant[0].water_s === 'low' || plant[0].water_s === 'medium-low'){
                    if (Number(phyll.moisture[1]) > 950){
                        condition+= 'I\'m drowning! too much water. ';
                    } else if (Number(phyll.moisture[1]) < 600){
                        condition+= 'I\'m thirsty, not enough water. ';
                    }
                }else if (plant[0].water_s === 'medium'){
                    if (Number(phyll.moisture[1]) > 1000){
                        condition+= 'I\'m drowning! too much water. ';
                    } else if (Number(phyll.moisture[1]) < 750){
                        condition+= 'I\'m thirsty, not enough water. ';
                    }
                }else if (plant[0].water_s === 'medium-high' || plant[0].water_s === 'high'){
                    if (Number(phyll.moisture[1]) > 1050){
                        condition+= 'I\'m drowning! too much water. ';
                    } else if (Number(phyll.moisture[1]) < 800){
                        condition+= 'I\'m thirsty, not enough water. ';
                    }
                };

                // check the sunlight, and adjust condition if necessary
                if (plant[0].light_s === 'low' || plant[0].light_s === 'medium-low'){
                    if (Number(phyll.light[2]) > 195){
                        condition+= 'I\'m burning! too much sun. ';
                    } else if (Number(phyll.light[2]) < 155){
                        condition+= 'I\'m cold! not enough sun. ';
                    }
                }else if (plant[0].light_s === 'medium'){
                    if (Number(phyll.light[2]) > 250){
                        condition+= 'I\'m burning! too much sun. ';
                    } else if (Number(phyll.light[2]) < 165){
                        condition+= 'I\'m cold! not enough sun. ';
                    }
                }else if (plant[0].light_s === 'medium-high' || plant[0].light_s === 'high'){
                    if (Number(phyll.light[2]) > 275){
                        condition+= 'I\'m burning! too much sun. ';
                    } else if (Number(phyll.light[2]) < 195){
                        condition+= 'I\'m cold! not enough sun. ';
                    }
                };
            }

            if (condition){
                healthFlag = true;
            } else if (!condition){
                condition += 'I got everything I need! :D';
            }

            console.log(condition);

            db.tx(function (t) {
                // `t` and `this` here are the same;
                // creating a sequence of transaction queries:
                var q1 = this.none('update api.users_plants set daily_moisture=$1 where phyll_id=$2', [moist, deviceId]);
                var q2 = this.none('update api.users_plants set daily_sun=$1 where phyll_id=$2', [light, deviceId]);
                var q3 = this.none('update api.users_plants set daily_sun=$1 where phyll_id=$2', [light, deviceId]);
                var q3 = this.none('update api.users_plants set daily_sun=$1 where phyll_id=$2', [light, deviceId]);

                // returning a promise that determines a successful transaction:
                return this.batch([q1, q2, q3]); // all of the queries are to be resolved;
            })
                .then(function (data) {
                    console.log(data); // printing successful transaction output;
                })
                .catch(function (error) {
                    console.log(error); // printing the error;
                });


            res.send(plants);

        })
        .catch(function (error) {
            console.log(error);
        })


        // ------------------- DEFINE PLANT CATEGORIES ----------------- //
        // syntax: lowL = low Light, highM = high Moisture, etc.


        // function(plant){
        //     if plant.

        // const lowL = function(number){
        //     >160 < 185 ???
        // },
        // const mediumL = function(number){
        //     >175 < 210 ???
        // },
        // const highL = function(number){
        //     >200 < 260
        // },

    }

}

module.exports = cronUpdate;
