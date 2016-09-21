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

deviceSchema.methods.record = (req, res) => { // req should be complete post body of device status
  Device.findOneAndUpdate({deviceId: rec}, {
    $set: {
      deviceId    : req.deviceId,
      deviceOS    : req.deviceOS,
      deviceAlert : req.deviceAlert
    }, 
    $push: {
      date        : req.date,
      moisture    : req.moisture,
      ph          : rec.ph,
      light       : rec.light,
      humidity    : rec.humidity,
      temperature : rec.temperature,
      pressure    : rec.pressure,
      noise       : rec.noise
    }
  }, {upsert: true}, (err) => {
    
  })
}

// deviceSchema.methods.prune TODO
  // empties device results arrays of all but a week's data (10k at one per minute)

// deviceSchema.methods.purge TODO
  // destroy all environmental data from device

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