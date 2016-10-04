           require('dotenv').config();
const db = require('../../models/pg-config');


//-----------------------------------THIS FILE IS FOR UPDATING DAILY PHYL DATA ----------------------------------------------------


const cronUpdate = (req, res) => {

    const incomingData = req.body;
    console.log('incoming', incomingData);
    // for (const device in incomingData){


        const deviceId = incomingData['device1'].deviceId,
              moist    = incomingData['device1'].moisture,
              light    = incomingData['device1'].light,
              deviceId2 = incomingData['device2'].deviceId,
              moist2    = incomingData['device2'].moisture,
              light2    = incomingData['device2'].light;
        console.log('ONE', deviceId, moist, light, 'TWO', deviceId2, moist2, light2);

        db.any('SELECT api.users_plants.id, api.plants.water_s, api.plants.light_s FROM api.users_plants, api.plants WHERE api.users_plants.plant_type = api.plants.id AND api.users_plants.device_id = $1', [deviceId]).then(plants => {
            console.log(plants);
          if (plants.length > 0){
            console.log('resultat', moist, plants[0].light_s, plants[1].light_s);
            res.send(plants);

          };
        })
        .catch(function (error) {
            console.log(error);
        })


        // ------------------- DEFINE PLANT CATEGORIES ----------------- //
        // syntax: lowL = low Light, highM = high Moisture, etc.

        // const lowL = function(number){
        //     >160 < 185 ???
        // },
        // const mediumL = function(number){
        //     >175 < 210 ???
        // },
        // const highL = function(number){
        //     >200 < 260
        // },
        // cont lowM = function(number){
        //     >700 & < 900
        // },
        // cont mediumM = function(number){
        //      return (number > 850 && number < 975);
        // },
        // cont highM = function(number){
        //     > 900 & < 1050
        // },
        // db.tx(function (t) {
        //     // `t` and `this` here are the same;
        //     // creating a sequence of transaction queries:
        //     var q1 = this.none('update api.users_plants set daily_moisture=$1 where phyll_id=$2', [moist, deviceId]);
        //     var q2 = this.none('update api.users_plants set daily_sun=$1 where phyll_id=$2', [light, deviceId]);
        //     var q3 = this.none('update api.users_plants set daily_sun=$1 where phyll_id=$2', [light, deviceId]);


        //     // returning a promise that determines a successful transaction:
        //     return this.batch([q1, q2, q3]); // all of the queries are to be resolved;
        // })
        //     .then(function (data) {
        //         console.log(data); // printing successful transaction output;
        //     })
        //     .catch(function (error) {
        //         console.log(error); // printing the error;
        //     });
    // }

}

module.exports = cronUpdate;
