///////////////    NODE MODULES    ///////////////
const express     = require('express');
const router      = express.Router();

//////////////    SERVER MODULES    //////////////
const Device        = require('../../models/mdb-models/phyllos-device-data.js');
const db            = require('../../models/pg-config');
const mdb           = require('../../models/mdb-config.js');


router.post('/record', (req, res) => {Device.record(req.body.status, res);});
router.post('/retrieve', (req, res) => {Device.retrieve(req.body.deviceId, res);});
router.get('/list', (req, res) => {Device.list(req, res);});
router.post('/prune', (req, res) => {Device.prune(req.body.deviceId, res);});
router.post('/discard', (req, res) => {Device.discard(req.body, res);});
router.post('/purge', (req, res) => {Device.purge(req.body, res);});
router.get('/dailyData', (req, res) => {Device.dailyData(req, res);});

module.exports = router;
