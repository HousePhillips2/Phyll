const db = require('./pg-config');


function insertUser(user_obj, callback){

  db.one(`select id from api.users where fb_id = ${user_obj.fb_id}`)
  .then((data) => { //if user exists in db, return user id from users table and update user_obj
    user_obj.id=data.id;
    callback(user_obj); //send back updated user_obj
  }).catch((error) => { //if user does not exist in db; store user info into db
    console.log(error, 'user does not exist in db');
  });
}


  
module.exports = insertUser;


/*
Table: api.users
  id:
  user_name:
  email:
  oauth_key:
  img:
*/

