///////////////    NODE MODULES    ///////////////
const express     = require('express');
const router      = express.Router();

//////////////    SERVER MODULES    //////////////
const admin      = require('./admin');
const garden      = require('./garden');
const plantData   = require('./plant-data');
const plantFacts  = require('./plant-facts');
<<<<<<< 99f4f919e8b9bafeaef958d3cb71548434495843
const plantsLibrary = require('./plants-library');
=======
const auth        = require('./auth-config');

>>>>>>> [refactor] move auth api into api model

// ROUTE requests
router.use('/admin', admin);
router.use('/garden', garden);
<<<<<<< 99f4f919e8b9bafeaef958d3cb71548434495843
router.use('/plantsLibrary', plantsLibrary);
=======
router.use('/auth', auth);

>>>>>>> [refactor] move auth api into api model

// TODO: SPLIT INTO SUB ROUTES?
router.use('/plantData', plantData);
router.use('/plantFacts', plantFacts);

router.get('/', (req, res) => {
  console.log('look ma');
});


module.exports = router;
