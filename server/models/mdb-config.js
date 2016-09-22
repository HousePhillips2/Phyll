const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOLAB_URI, { autoIndex: false });

var mdb = mongoose.connection;
mdb.on('error', console.error.bind(console, 'Cobra: 1. Mongoose: 0.'));
mdb.once('open', function () {
  console.log('Mongoose is alive and kicking.')
});

module.exports = mdb;