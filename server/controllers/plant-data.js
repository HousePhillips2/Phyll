///////////////    NODE MODULES    ///////////////
const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {

  const plantData = {
    User: 'Phoebe',
    Water: 'Medium',
    Soil: 'pH 7.5',
    Light: 'Full Sun'
  };

  res.send(plantData);
});

router.post('/', (req, res) => {

  let plantName = req.body.plantName;
  let plantNickName = req.body.plantNickName;
  //to add user plant input into database
  res.send('Success!');
});

module.exports = router;

