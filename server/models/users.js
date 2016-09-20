const db = require('./pg-config');

<<<<<<< 5f598d0637864319328e8b087da0201d02b95931
db.any("select user_name from api.users")
=======

db.any("select user_name from api.users", [true])// see below for field names in plants table
>>>>>>> [Update] Insert database with 107 plants data; add basic query function in models
  .then(function (data) {
    console.log(data[1].user_name);//print out user name 'Phoebe Maio'
  })
  .catch(function (error) {
      console.log(error);
  });

<<<<<<< 5f598d0637864319328e8b087da0201d02b95931
db.none("insert into api.users (user_name) values ('Marvin Maio')")
  .then( () => {
    console.log('success');
  })
  .catch( (error) => {
    console.log(error);
  });

  /*
  Table: api.users
    id:
    user_name:
    email:
    oauth_key:
    img:
  */
=======

<<<<<<< 076dcc6eaa969a90b10f745d4fdb384fada41836

>>>>>>> [Update] Insert database with 107 plants data; add basic query function in models
  
=======
>>>>>>> [refactor] Update database using pg-promise from pg
