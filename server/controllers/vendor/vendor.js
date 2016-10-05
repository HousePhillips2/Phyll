///////////////    NODE MODULES    ///////////////
const express     = require('express');
const router      = express.Router();

//////////////    SERVER MODULES    //////////////
const auth          = require('./auth.js');

// ROUTE requests
router.use('/auth', auth);




module.exports = router;