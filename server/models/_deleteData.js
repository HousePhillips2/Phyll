<<<<<<< f58f4ea9ce8c605e4cc9903a22f985365a7b2073
<<<<<<< 5f598d0637864319328e8b087da0201d02b95931
=======
           require('dotenv').config({path: '../../.env'});

>>>>>>> [Update] Insert database with 107 plants data; add basic query function in models
=======
>>>>>>> [feature] Add routes for device pings
const db = require('./pg-config');



//----------------------------------------------THIS FILE IS USED FOR DELETE ALL ROWS FROM SPECIFIC TABLE----------------------------------
//-----------------------------------------------BE CAREFUL! -------------------------------------------------------------------------

// db.result("delete from api.plants", false)
//     .then(function (result) {
//         // rowCount = number of rows affected by the query
//         console.log(result.rowCount); // print how many records were deleted;
//     })
//     .catch(function (error) {
//         console.log("ERROR:", error.message || error);
//     });
