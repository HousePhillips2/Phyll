           require('dotenv').config();

///////////////    NODE MODULES    ///////////////
const express     = require('express');
const router      = express.Router();
const cronUpdate = require('./_cronjobUpdate');

//////////////    SERVER MODULES    //////////////
// const db = require('../../models/pg-config');

router.post('/daily', (req, res) => {

  cronUpdate(req, res);

});

module.exports = router;
