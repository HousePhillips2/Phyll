const mongoose = require('mongoose');
const Device = require('./mdb-models/phyllos-device-data')
const path = require('path');

mongoose.connect(process.env.MONGO_DB_URI);

var mdb = mongoose.connection;
mdb.on('error', console.error.bind(console, 'Cobra: 1. Mongoose: 0.'));
mdb.once('open', function () {
  console.log('Mongoose is alive and kicking.')
});

module.exports = mdb;