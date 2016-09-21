const db = require('./pg-config');

db.any("select user_name from api.users")

  .then(function (data) {
      console.log(data);
  })
  .catch(function (error) {
      console.log(error);
  });

db.none("insert into api.users (user_name) values ('Marvin Maio')")
  .then( () => {
    console.log('success');
  })
  .catch( (error) => {
    console.log(error);
  });

  /*
  Table: users.js
    user_name:
    email:
    oauth_key 
  */
  

