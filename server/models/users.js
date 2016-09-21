const db = require('./pg-config');

<<<<<<< 04b651307640077d63587fd5d2a22ed298410670

function query_user(user_obj, callback) {
=======
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
>>>>>>> [feature] Add routes for device pings

  db.one(`select id from api.users where fb_id = ${user_obj.fb_id}`)
  .then((data) => { //if user exists in db, return user id from users table and update user_obj
    user_obj.id=data.id;
    callback(user_obj); //send back updated user_obj
  }).catch((error) => { //if user does not exist in db; store user info into db
    db.one('insert into api.users (fb_id, first_name, last_name, nickname, img, time_zone) values($1, $2, $3, $4, $5, $6) returning id',
      [user_obj.fb_id, user_obj.first_name, user_obj.last_name, user_obj.nickname, user_obj.img, user_obj.timezone])
    .then((data) => { // return user id from users table and update user_obj
      user_obj.id=data.id;
      callback(user_obj); //send back updated user_obj;
    })
    .catch((error) => {
      console.log(error,'insert user error');
    });
  });
}

module.exports = query_user;


/*
Table: api.users
  id:
  user_name:
  email:
  oauth_key:
  img:
*/



