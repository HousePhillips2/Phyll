///////////////    NODE MODULES    ///////////////
const express = require('express');
const router  = express.Router();
const db      = require('../../models/pg-config.js');

router.get('/', function(req, res) {

  // const friends = [
  //   {User: 'Phoebe', user_img:'https://figuya.com/uploads/product/profile_picture/6195/profile_Pop-Animation-67-Natsu-Dragneel-Vorschau.jpg', plants: '4 Plants', Light: 'Full Sun'},
  //   {User: 'Casey', user_img:'https://figuya.com/uploads/product/profile_picture/6189/profile_Pop-Animation-79-Soul-Vorschau.jpg', plants: '3 Plants', Light: 'Full Sun'},
  //   {User: 'Eric', user_img:'https://figuya.com/uploads/product/profile_picture/6188/profile_Pop-Animation-80-Maka-Albarn-Vorschau.jpg', plants: '2 Plants', Light: 'Full Sun'},
  //   {User: 'Sergey', user_img:'https://figuya.com/uploads/product/profile_picture/6191/profile_Pop-Animation-72-Sasuke-Uchiha-Vorschau.jpeg', plants: '1 Plants', Light: 'Full Sun'}
  // ];
  db.any("select * from api.users")// see below for field names in plants table
  .then(function (data) {
    res.send(data);
  })
  .catch(function (error) {
    console.log(error);
  });


});

module.exports = router;
