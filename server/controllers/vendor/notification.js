const client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

const notification = (req, res) => {
  client.sendMessage({

      to: req.body.userNumber,
      from: process.env.TWILIO_NUMBER,
      body: req.body.message

  }, function(err, responseData) {
      if (err) res.status(500).send(err);
      else res.status(200).send('SUCCESS: Sent \"' + responseData.body + '\" to ' + responseData.to + '.');

  });
};

module.exports = notification;