           require('dotenv').config({path: '../../.env'});

const db = require('./pg-config');

db.any("select * from api.users", [true])
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        console.log(error);
    });
