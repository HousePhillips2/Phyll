const db = require('./pg-config');


db.none("insert into api.users(user_name) values($1)", ['Eric Churchie'])
  .then(function () {
    console.log(success);
  })
  .catch(function (error) {
      // error;
  });

db.any("select user_name from api.users", [true])// see below for field names in plants table
  .then(function (data) {
      console.log(data);
  })
  .catch(function (error) {
      console.log(error);
  });

