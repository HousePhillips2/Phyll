const db = require('./pg-config');



//-----------------------------------THIS FILE IS FOR INSERTING LARGE AMOUNT OF PLANTS DATA----------------------------------------------------


// for(let i of plantsData){

// db.one("select * from users where name=$1", name)
//     .then(function (user) {
//         console.log(user); // print user object;
//     })
//     .catch(function (error) {
//         // error;
//     });
// }


// ------------------------- Manually add user plants --------------------------- //

let userPlants = [
  {
// id: '',
bot_api: [],
daily_moisture: [],
daily_light: [],
phyll_id: "02:a3:a4:2a:1f:95",
plant_health: 5,
plant_img: 'http://i.imgur.com/jowP6zY.jpg',
plant_nickname: 'Black-Widow',
plant_type: '4d5eec74-fc07-4728-90db-3afb12ba121a',
user_id: '92b2c2ee-76fa-4461-b14e-31abcce41c2b'
  },
  {
// id: '',
bot_api: [],
daily_moisture: [],
daily_light: [],
phyll_id: "02:a3:a4:2a:1f:95",
plant_health: 5,
plant_img: 'http://i.imgur.com/ve1eYcB.jpg',
plant_nickname: 'War-and-Peace',
plant_type: 'd4e70727-438e-40f5-b99e-63ace4335283',
user_id: ''
  }
]

for(let i of user_plants){

db.one("select * from users where name=$1", name)
    .then(function (user) {
        console.log(user); // print user object;
    })
    .catch(function (error) {
        // error;
    });
}
