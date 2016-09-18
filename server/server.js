                      require('dotenv').config();
const express       = require('express');
const app           = express();
const partials      = require('express-partials');
const session       = require('express-session');
const bodyParser    = require('body-parser');
const http          = require('http');
const fs            = require('fs');

const port          = process.env.PORT||8080;

app.listen(port);
console.log('Up and running on ' + port);

app.use(express.static('dist'));

app.get('/', (req, res) => res.redirect('/index.html'));

app.get('/plantData', (req, res) => {
  const plantData = {User: 'Phoebe', Water: 'Medium', Soil: 'pH 7.5', Light: 'Full Sun'};
  res.send(plantData);
});

app.get('/plantFacts', (req,res) => {
  const plantFacts = {
             Common_Name: 'Spider Plant',
             Water: 'The top 50% of the soil of the soil in a Spider Plant pot should dry out before you water. A good way to tell when a Spider Plant needs water is to look at the leaves. The green color in the leaves of a Spider plant starts to fade when the soil is dry. Water high in salts and chemicals causes brown tips on a Spider Plant. Never use water that had passed through a water softener for a Spider Plant.',
             Light: 'Spider Plants like medium to bright indirect light. Solid green Spider Plants need less light than variegated Spider Plants. No Spider Plant should ever be put in the direct sun.',
             Fertilizer: 'Fertilize a Spider Plant once a month with a balanced plant food at 1/2 the recommended strength. Spider Plants need food only when they are actively growing. Feeding a Spider Plant too often causes the tips of the leaves to turn brown.',
             Soil: 'Spider Plants grow well in a good organic houseplant soil. An African Violet soil is very good for Spider plants also.'
          };
  res.send(plantFacts);
})