///////////////    NODE MODULES    ///////////////
const express     = require('express');
const router      = express.Router();

//////////////    SERVER MODULES    //////////////
const auth          = require('./auth.js');
const notification  = require('./notification');

// ROUTE requests
router.use('/auth', auth);
router.use('/notify', notification); // ({userNumber: 4155555555, message: 'Your message here'})

module.exports = router;