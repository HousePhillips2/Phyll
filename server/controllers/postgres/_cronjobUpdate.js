           require('dotenv').config();
const db = require('../../models/pg-config');


//-----------------------------------THIS FILE IS FOR UPDATING DAILY PHYL DATA ----------------------------------------------------


const cronUpdate = (req, res) => {

    const incomingData = req.body;
    console.log(incomingData);

    // for (let i = 0; i < updata.length; i++){

    //     const img = updata[i].img;
    //     const name = updata[i].name;

    // db.tx(function (t) {
    //     // `t` and `this` here are the same;
    //     // creating a sequence of transaction queries:
    //     var q1 = this.none('update api.user_plants set img=$1 where plant_name=$2', [img, name]);

    //     // returning a promise that determines a successful transaction:
    //     return this.batch([q1]); // all of the queries are to be resolved;
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
