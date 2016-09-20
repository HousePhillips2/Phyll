const db = require('./pg-config');


function query_user(user_obj, callback) {

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



