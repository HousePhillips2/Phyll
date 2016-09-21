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

deviceSchema.set('autoIndex', false);

deviceSchema.statics.record = (req, res) => { // req should be {status: {DEVICE STATUS OBJECT}}
  Device.findOneAndUpdate({deviceId: req.deviceId}, {
    $set: {
      deviceId    : req.deviceId,
      deviceOS    : req.deviceOS,
      deviceAlert : req.deviceAlert
    }, 
    $push: {
      date        : req.date,
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
    res.status(200).send('Conditions for ' + req.deviceId + ' recorded!');
  });
};

deviceSchema.statics.retrieve = (req, res) => {
  Device.findOne({deviceId: req}).exec((err, device) => { // query with {deviceId: "id to be found"}
    if (err) res.status(500).send(err);
    res.status(200).send(device);
  });
};

deviceSchema.statics.list = (req, res) => { // no arguments - returns all devices
  Device.find((err, devices)=> {
    if (err) res.status(500).send(err);
    res.status(200).send(devices);
  });
};

// deviceSchema.statics.prune = (req, res) => { // req should be a device id string
//   Device.findOneAndUpdate({deviceId: req},
//     {
//       date        : {$slice:[]}, // Unsolved
//       moisture    : [],
//       ph          : [],
//       light       : [],
//       humidity    : [],
//       temperature : [],
//       pressure    : [],
//       noise       : []
//     }, 
//     {upsert: false}, (err) => {
//       if (err) res.status(500).send(err);
//       res.status(200).send('Conditions for ', req, ' recorded!');
//   });
// };

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
      res.status(200).send('Conditions for ' + req + ' recorded!');
    });
  } else {
    res.status(300).send('You don\'t seem certain');
  }
};

deviceSchema.statics.discard = (req, res) => { // query with {deviceId: "id to be found", confirm: "yes" or "no"}
  if (req.confirm === 'yes') {
    Device.findOneAndRemove({deviceId: req}, (err) => {
      if (err) res.status(500).send(err);
      res.status(200).send('Device ' + req + ' has been removed from phyll.IO');
    })
  } else {
    res.status(300).send('No take backs if you go through with this.');
  }
}

const Device = mongoose.model('Device', deviceSchema);
module.exports = Device;