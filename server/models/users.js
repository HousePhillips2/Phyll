const db = require('./pg-config');

db.any("select user_name from api.users", [true])// see below for field names in plants table
  .then(function (data) {
    console.log(data[1].user_name);//print out user name 'Phoebe Maio'
  })
  .catch(function (error) {
      console.log(error);
  });



  