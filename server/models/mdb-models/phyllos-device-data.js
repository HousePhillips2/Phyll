const mongoose = require('mongoose');

// todo: header handler to share between methods

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

// Update environmental data for device or add new device with data
deviceSchema.statics.record = (req, res) => { // req should be {status: {DEVICE STATUS OBJECT}}
  Device.findOneAndUpdate({deviceId: req.deviceId}, {
    $set: {
      deviceId    : req.deviceId,
      deviceOS    : req.deviceOS,
      deviceAlert : req.deviceAlert
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

deviceSchema.statics.list = (req, res) => { // no arguments - returns all devices
  Device.find((err, devices)=> {
    if (err) res.status(500).send(err);
    else res.status(200).send(devices);
  });
};

// Purges all but the 10k most recent posts from a device
deviceSchema.statics.prune = (req, res) => { // query with {deviceId: "id to be found"}
  const trim = {$each: [], $slice: -10000}
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