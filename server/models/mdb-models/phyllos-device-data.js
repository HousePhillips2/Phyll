const mongoose = require('mongoose')

const deviceSchema = mongoose.Schema({
  deviceId    : String,
  deviceOS    : String,
  deviceAlert : {type: Boolean, default: false},
  date        : [],
  moisture    : [],
  ph          : [],
  light       : [],
  humidity    : [],
  temperature : [],
  pressure    : [],
  noise       : []
});

// deviceSchema.methods.record = function record(cb) {
//   Device.find
// }
  // updates record or creates new
  // up to 43k records (one month at one per minute)

// deviceSchema.methods.prune
  // empties device results arrays of all but a week's data (10k at one per minute)

// deviceSchema.methods.purge
  // destroy all environmental data from device

// deviceSchema.methods.retrieve
  // fetch target device record by id

// deviceSchema.methods.list
  // fetch a list of all active devices (post within last hour), each bundled with most recent measurements

// deviceSchema.methods.discard
  // delete device from db

module.exports = mongoose.model('Device', deviceSchema);