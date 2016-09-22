///////////////    NODE MODULES    ///////////////
const express     = require('express');
const router      = express.Router();

//////////////    SERVER MODULES    //////////////
const admin      = require('./admin');
const garden      = require('./garden');
const plantData   = require('./plant-data');
const plantFacts  = require('./plant-facts');


// ROUTE requests
router.use('/admin', admin);
router.use('/garden', garden);

// TODO: SPLIT INTO SUB ROUTES?
router.use('/plantData', plantData);
router.use('/plantFacts', plantFacts);

router.get('/', (req, res) => {
  console.log('look ma');
});

module.exports = router;
