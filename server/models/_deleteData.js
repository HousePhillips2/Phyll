           require('dotenv').config({path: '../../.env'});

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
