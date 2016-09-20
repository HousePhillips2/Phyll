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

module.exports = router;
