           require('dotenv').config();
const db = require('../../models/pg-config');


//-----------------------------------THIS FILE IS FOR UPDATING DAILY PHYL DATA -----------------------


const cronUpdate = (req, res) => {

    const incomingData = req.body;
    console.log('incoming', incomingData);
    for (let device in incomingData){

        let deviceId = incomingData[device].deviceId,
              phyll = incomingData[device];


        db.any('SELECT api.users_plants.id, api.plants.water_s, api.plants.light_s FROM api.users_plants, api.plants WHERE api.users_plants.plant_type = api.plants.id AND api.users_plants.device_id = $1', [deviceId]).then(plant => {
            // console.log(plants);
            console.log('otvet', phyll.moisture, plant);
            // plant object contains:(1) id (2) water_s (3)light_s
            // phyll object contains: (1) deviceId (2) light array (3) moisture array

            let healthFlag = 0;
            let waterHealthFlag = 0;
            let lightHealthFlag = 0;
            let condition = '';
            let moisture = phyll.moisture.map(el =>{
                return Number(el);
            });
            let light = phyll.light.map(el => {
                return Number(el);
            });
            console.log('lookie', light, moisture);

            // const conditioner = plant => {

                // check the water, and adjust condition if necessary
                if (plant[0].water_s === 'low' || plant[0].water_s === 'medium-low'){
                    if (Number(phyll.moisture[1]) > 950){
                        condition+= 'I\'m drowning! too much water. ';
                        waterHealthFlag = 1;
                    } else if (Number(phyll.moisture[1]) < 600){
                        condition+= 'I\'m thirsty, not enough water. ';
                        waterHealthFlag = 1;
                    }
                }else if (plant[0].water_s === 'medium'){
                    if (Number(phyll.moisture[1]) > 1000){
                        condition+= 'I\'m drowning! too much water. ';
                        waterHealthFlag = 1;
                    } else if (Number(phyll.moisture[1]) < 750){
                        condition+= 'I\'m thirsty, not enough water. ';
                        waterHealthFlag = 1;
                    }
                }else if (plant[0].water_s === 'medium-high' || plant[0].water_s === 'high'){
                    if (Number(phyll.moisture[1]) > 1050){
                        condition+= 'I\'m drowning! too much water. ';
                        waterHealthFlag = 1;
                    } else if (Number(phyll.moisture[1]) < 800){
                        condition+= 'I\'m thirsty, not enough water. ';
                        waterHealthFlag = 1;
                    }
                };

                // check the sunlight, and adjust condition if necessary
                if (plant[0].light_s === 'low' || plant[0].light_s === 'medium-low'){
                    if (Number(phyll.light[2]) > 195){
                        condition+= 'Im burning! too much sun. ';
                        lightHealthFlag = 1;
                    } else if (Number(phyll.light[2]) < 155){
                        condition+= 'Im cold! not enough sun. ';
                        lightHealthFlag = 1;
                    }
                }else if (plant[0].light_s === 'medium'){
                    if (Number(phyll.light[2]) > 250){
                        condition+= 'Im burning! too much sun. ';
                        lightHealthFlag = 1;
                    } else if (Number(phyll.light[2]) < 165){
                        condition+= 'Im cold! not enough sun. ';
                        lightHealthFlag = 1;
                    }
                }else if (plant[0].light_s === 'medium-high' || plant[0].light_s === 'high'){
                    if (Number(phyll.light[2]) > 275){
                        condition+= 'Im burning! too much sun. ';
                        lightHealthFlag = 1;
                    } else if (Number(phyll.light[2]) < 195){
                        condition+= 'Im cold! not enough sun. ';
                        lightHealthFlag = 1;
                    }
                };
            // }

            // if condition WAS adjusted (i.e. adverse conditions exist), flip 'healthFlag' boolean
            // if condition was NOT adjusted (i.e. no adverse conditions), set a positive condition
            if (condition){
                healthFlag = 1;
            } else if (!condition){
                condition += 'I got everything I need! :D';
            }

            console.log('condition', condition, plant[0].water_s, plant[0].light_s);

              db.none('UPDATE api.users_plants SET health = health+1, body_api = ARRAY[$2], daily_moisture = ARRAY[$3], daily_light = ARRAY[$4] WHERE device_id=$1',
                [deviceId, condition, moisture, light])
              .catch((error) => {
                console.log(error,'insert plant form data error');
              });

            res.send('success');

        })
        .catch(function (error) {
            console.log(error);
        })
    }

}

module.exports = cronUpdate;
