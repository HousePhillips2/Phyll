///////////////    NODE MODULES    ///////////////
const express     = require('express');
const router      = express.Router();

//////////////    SERVER MODULES    //////////////
const admins      = require('./admins');
const garden      = require('./garden');
const plantData   = require('./plant-data');
const plantFacts  = require('./plant-facts');


// ROUTE requests
router.get('/admins', admins);
router.get('/garden', garden);

// TODO: SPLIT INTO SUB ROUTES?
router.get('/plantData', plantData);
router.post('/plantData', plantData);
router.post('/plantFacts', plantFacts);


module.exports = router;
