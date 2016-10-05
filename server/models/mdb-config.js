const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOLAB_URI, { autoIndex: false });

var mdb = mongoose.connection;
mdb.on('error', console.error.bind(console, 'Cobra: 1. Mongoose: 0.'));
mdb.once('open', function () {
  console.log('Mongoose is alive and kicking.')
});

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

const record = (req, res) => { // req should be {status: {DEVICE STATUS OBJECT}}
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

// const prune = (req, res) => { // req should be a device id string
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

const purge = (req, res) => { // query with {deviceId: "id to be found", confirm: "yes" or "no"}
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
      res.status(200).send('Conditions for ', req, ' recorded!');
    });
  }
  res.status(300).send('You don\'t seem certain'); 
};

const retrieve = (req, res) => {
  Device.findOne({deviceId: req}).exec((err, device) => { // query with {deviceId: "id to be found"}
    if (err) res.status(500).send(err);
    res.status(200).send(device);
  });
};

const list = (req, res) => { // query with {confirm: "yes"}
  if (req === "yes") {
    Device.find((err, devices)=> {
      if (err) res.status(500).send(err);
      res.status(200).send(devices);
    });
  }
  res.status(300).send('You don\'t seem certain');  
};

const discard = (req, res) => { // query with {deviceId: "id to be found"}
  Device.findOneAndRemove({deviceId: req}, (err) => {
    if (err) res.status(500).send(err);
    res.status(200).send('Device ', req, ' has been removed from phyll.IO');
  })
}

module.exports = mdb;