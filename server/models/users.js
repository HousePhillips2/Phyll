const db = require('./pg-config');

<<<<<<< f58f4ea9ce8c605e4cc9903a22f985365a7b2073
<<<<<<< d2e8a4627f5abe018364289f46c4cee723ef9bbf
<<<<<<< 5f598d0637864319328e8b087da0201d02b95931
db.any("select user_name from api.users")
=======

db.any("select user_name from api.users", [true])// see below for field names in plants table
>>>>>>> [Update] Insert database with 107 plants data; add basic query function in models
=======
=======

>>>>>>> [feature] Add routes for device pings
db.none("insert into api.users(user_name) values($1)", ['Eric Churchie'])
  .then(function () {
    console.log(success);
  })
  .catch(function (error) {
      // error;
  });

<<<<<<< f58f4ea9ce8c605e4cc9903a22f985365a7b2073
db.any("select * from api.users", [true])
>>>>>>> [update] add basic insert data method for database
=======
db.any("select user_name from api.users", [true])// see below for field names in plants table
>>>>>>> [feature] Add routes for device pings
  .then(function (data) {
      console.log(data);
  })
  .catch(function (error) {
      console.log(error);
  });

<<<<<<< d2e8a4627f5abe018364289f46c4cee723ef9bbf
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
=======
>>>>>>> [update] add basic insert data method for database
