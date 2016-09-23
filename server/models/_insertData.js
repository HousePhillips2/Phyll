const db = require('./pg-config');



//-----------------------------------THIS FILE IS FOR INSERTING LARGE AMOUNT OF PLANTS DATA----------------------------------------------------


for(let i of plantsData){

db.one("select * from users where name=$1", name)
    .then(function (user) {
        console.log(user); // print user object;
    })
    .catch(function (error) {
        // error;
    });
}

