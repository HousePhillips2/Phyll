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

deviceSchema.methods.record = (req, res) => { // req should be complete post body of device status
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
    res.status(200).send('Conditions for ', req.deviceId, ' recorded!');
  });
};

// deviceSchema.methods.prune = (req, res) => { // req should be a device id string
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

deviceSchema.methods.purge = (req, res) => { // req should be a device id string
  Device.findOneAndUpdate({deviceId: req}, {
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
    res.status(200).send('Conditions for ', req, ' recorded!');
  });
};

deviceSchema.methods.retrieve = (req, res) => {
  Device.findOne({deviceId: req}).exec((err, device) => { // req should be a device id string
    if (err) res.status(500).send(err);
    res.status(200).send(device);
  });
};

deviceSchema.methods.list = (req, res) => {
  Device.find((err, devices)=> {
    if (err) res.status(500).send(err);
    res.status(200).send(devices);
  });
};

deviceSchema.methods.discard = (req, res) => { // req should be a device id string
  Device.findOneAndRemove({deviceId: req}, (err) => {
    if (err) res.status(500).send(err);
    res.status(200).send('Device ', req, ' has been removed from phyll.IO');
  })
}

module.exports = mongoose.model('Device', deviceSchema);