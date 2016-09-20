           require('dotenv').config({path: '../../.env'});

const db = require('./pg-config');

db.none("insert into api.users(user_name) values($1)", ['Eric Churchie'])
  .then(function () {
    console.log(success);
  })
  .catch(function (error) {
      // error;
  });

db.any("select * from api.users", [true])
  .then(function (data) {
      console.log(data);
  })
  .catch(function (error) {
      console.log(error);
  });

