           require('dotenv').config();

///////////////    NODE MODULES    ///////////////
const express     = require('express');
const router      = express.Router();
const cronUpdate = require('./_cronjobUpdate');
// const bodyParser  = require('body-parser');


// app.use(bodyParser.urlencoded({
//   extended: true
// }));

//////////////    SERVER MODULES    //////////////
// const db = require('../../models/pg-config');

router.post('/daily', (req, res) => {

  // cronUpdate(req, res);
  console.log(req.body);

});

module.exports = router;
