const mongoose = require('mongoose');

// todo: header handler to share between all methods

const deviceSchema = mongoose.Schema({
  deviceId    : String,
  deviceOS    : String,
  deviceAlert : {type: Boolean, default: false},
  deviceLoc   : {
    lat: {type: String},
    long: {type: String},
    zipcode: {type: String}
  },
  date        : [],
  moisture    : [],
  light       : []
  // humidity    : [],
  // ph          : [],
  // temperature : [],
  // pressure    : [],
  // noise       : []
});

// Update environmental data for device or add new device with data
deviceSchema.statics.record = (req, res) => { // req should be {status: {DEVICE STATUS OBJECT}}
  Device.findOneAndUpdate({deviceId: req.deviceId}, {
    $set: {
      deviceId    : req.deviceId,
      deviceOS    : req.deviceOS,
      deviceAlert : req.deviceAlert,
      deviceLoc: {
        lat: req.location.lat,
        long: req.location.long,
        zipcode: req.location.zipcode
      },
    }, 
    $push: {
      date        : new Date(),
      moisture    : req.moisture,
      ph          : req.ph,
      light       : req.light,
      humidity    : req.humidity,
      temperature : req.temperature,
      pressure    : req.pressure,
      noise       : req.noise
    }
  }, {upsert: true}, (err) => {
    if (err) res.status(500).send(err);
    else res.status(200).send('Conditions for ' + req.deviceId + ' recorded!');
  });
};

deviceSchema.statics.retrieve = (req, res) => {
  Device.findOne({deviceId: req}).exec((err, device) => { // query with {deviceId: "id to be found"}
    if (err) res.status(500).send(err);
    else res.status(200).send(device);
  });
};

// Return a list of all devices and their most recent environmental data
deviceSchema.statics.list = (req, res) => { // no arguments
  Device.find({}, {
    deviceId    : 1,
    deviceLoc   : 1,
    date        : {$slice: -1},
    moisture    : {$slice: -1},
    ph          : {$slice: -1},
    light       : {$slice: -1},
    humidity    : {$slice: -1},
    temperature : {$slice: -1},
    pressure    : {$slice: -1},
    noise       : {$slice: -1}
  }, (err, devices)=> {
    if (err) res.status(500).send(err);
    else res.status(200).send(devices);
  });
};

// Purge all but the 1k most recent posts from a device
deviceSchema.statics.prune = (req, res) => { // query with {deviceId: "id to be found"}
  const trim = {$each: [], $slice: -1000}
  Device.findOneAndUpdate({deviceId: req}, {
    $push: {
      date        : trim,
      moisture    : trim,
      ph          : trim,
      light       : trim,
      humidity    : trim,
      temperature : trim,
      pressure    : trim,
      noise       : trim
      }
  }, {upsert: false}, (err) => {
    if (err) res.status(500).send(err);
    else res.status(200).send('Trimmed the fat for ' + req.deviceId + '.');
  });
};

// Empty all data arrays for a registered device
deviceSchema.statics.purge = (req, res) => { // query with {deviceId: "id to be found", confirm: "yes" or "no"}
  if (req.confirm === "yes") {
    Device.findOneAndUpdate({deviceId: req.deviceId}, {
      $set: {
        date        : [],
        moisture    : [],
        ph          : [],
        light       : [],
        humidity    : [],
        temperature : [],
        pressure    : [],
        noise       : []
      }
    }, {upsert: false}, (err) => {
      if (err) res.status(500).send(err);
      else res.status(200).send('Conditions for ' + req.deviceId + ' emptied and reset!');
    });
  } else {
    res.status(300).send('You don\'t seem certain');
  }
};

// Delete a registered device
deviceSchema.statics.discard = (req, res) => { // query with {deviceId: "id to be found", confirm: "yes" or "no"}
  if (req.confirm === 'yes') {
    Device.findOneAndRemove({deviceId: req.deviceId}, (err) => {
      if (err) res.status(500).send(err);
      else res.status(200).send('Device ' + req.deviceId + ' has been removed from phyll.IO');
    })
  } else {
    res.status(300).send('No take backs if you go through with this.');
  }
}

const Device = mongoose.model('Device', deviceSchema);
module.exports = Device;