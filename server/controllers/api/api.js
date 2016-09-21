///////////////    NODE MODULES    ///////////////
const express     = require('express');
const router      = express.Router();

//////////////    SERVER MODULES    //////////////
const admins      = require('./admins');
const garden      = require('./garden');
const plantData   = require('./plant-data');
const plantFacts  = require('./plant-facts');


// ROUTE requests
router.use('/admins', admins);
router.use('/garden', garden);

// TODO: SPLIT INTO SUB ROUTES?
router.use('/plantData', plantData);
router.use('/plantFacts', plantFacts);


module.exports = router;
