                      // require('dotenv').config();
const express       = require('express');
const app           = express();
const partials      = require('express-partials');
const session       = require('express-session');
const bodyParser    = require('body-parser');
const http          = require('http');
const fs            = require('fs');
const db        = require('./models/test_pg.js');//may consider using pg-promise https://github.com/vitaly-t/pg-promise/wiki/Learn-by-Example


// instantiate a new client
// the client will read connection information from
// the same environment variables used by postgres cli tools
// const client = new pg.Client({
//   user: 'wkuxiucjtyzzuc',
//   password: 'kBz9XixE8joEqMGOoGPcZt_R7h',
//   database: 'd8ju6srcedbq7g',
//   host: 'ec2-54-221-253-87.compute-1.amazonaws.com',
//   port: 5432,
//   ssl: true
// });
const port          = process.env.PORT||8080;

// *******************************  only here to gather data REMOVE ME  ************************
const request = require('request');
const cheerio = require('cheerio');
// const records = require('./records.js');
//*****************************************   END    ***********************************************


app.listen(port);
console.log('Up and running on ' + port);

app.use(express.static('dist'));
app.use(bodyParser.json());

app.get('/', (req, res) => res.redirect('/index.html'));

app.get('/plantData', (req, res) => {
  const plantData = {User: 'Phoebe', Water: 'Medium', Soil: 'pH 7.5', Light: 'Full Sun'};
  res.send(plantData);
});

app.get('/garden', (req, res) => {
  const friends = [{User: 'Phoebe', user_img:'https://figuya.com/uploads/product/profile_picture/6195/profile_Pop-Animation-67-Natsu-Dragneel-Vorschau.jpg', plants: '4 Plants', Light: 'Full Sun'},
                   {User: 'Casey', user_img:'https://figuya.com/uploads/product/profile_picture/6189/profile_Pop-Animation-79-Soul-Vorschau.jpg', plants: '3 Plants', Light: 'Full Sun'},
                   {User: 'Eric', user_img:'https://figuya.com/uploads/product/profile_picture/6188/profile_Pop-Animation-80-Maka-Albarn-Vorschau.jpg', plants: '2 Plants', Light: 'Full Sun'},
                   {User: 'Sergey', user_img:'https://figuya.com/uploads/product/profile_picture/6191/profile_Pop-Animation-72-Sasuke-Uchiha-Vorschau.jpeg', plants: '1 Plants', Light: 'Full Sun'}


  ];
  res.send(friends);
});

app.post('/plantFacts', (req,res) => {

  let name = req.body.plant;
  let plantFacts = [
          {
            Common_Name: 'Spider Plant',
            Water: 'The top 50% of the soil of the soil in a Spider Plant pot should dry out before you water. A good way to tell when a Spider Plant needs water is to look at the leaves. The green color in the leaves of a Spider plant starts to fade when the soil is dry. Water high in salts and chemicals causes brown tips on a Spider Plant. Never use water that had passed through a water softener for a Spider Plant.',
            Light: 'Spider Plants like medium to bright indirect light. Solid green Spider Plants need less light than variegated Spider Plants. No Spider Plant should ever be put in the direct sun.',
            Fertilizer: 'Fertilize a Spider Plant once a month with a balanced plant food at 1/2 the recommended strength. Spider Plants need food only when they are actively growing. Feeding a Spider Plant too often causes the tips of the leaves to turn brown.',
            Soil: 'Spider Plants grow well in a good organic houseplant soil. An African Violet soil is very good for Spider plants also.',
            img: 'http://site.unbeatablesale.com/img3001/alsf073.jpg'
            },
          {
            Common_Name: 'Money Tree',
            Water: 'The top 50% of the soil of the soil in a Spider Plant pot should dry out before you water. A good way to tell when a Spider Plant needs water is to look at the leaves. The green color in the leaves of a Spider plant starts to fade when the soil is dry. Water high in salts and chemicals causes brown tips on a Spider Plant. Never use water that had passed through a water softener for a Spider Plant.',
            Light: 'Spider Plants like medium to bright indirect light. Solid green Spider Plants need less light than variegated Spider Plants. No Spider Plant should ever be put in the direct sun.',
            Fertilizer: 'Fertilize a Spider Plant once a month with a balanced plant food at 1/2 the recommended strength. Spider Plants need food only when they are actively growing. Feeding a Spider Plant too often causes the tips of the leaves to turn brown.',
            Soil: 'Spider Plants grow well in a good organic houseplant soil. An African Violet soil is very good for Spider plants also.',
            img: 'http://cdn1.bigcommerce.com/server4100/6ys4nr/product_images/uploaded_images/money-tree-bonsai-tree.jpg'
          },
          {
            Common_Name: 'Tomato Plant',
            Water: 'The top 50% of the soil of the soil in a Spider Plant pot should dry out before you water. A good way to tell when a Spider Plant needs water is to look at the leaves. The green color in the leaves of a Spider plant starts to fade when the soil is dry. Water high in salts and chemicals causes brown tips on a Spider Plant. Never use water that had passed through a water softener for a Spider Plant.',
            Light: 'Spider Plants like medium to bright indirect light. Solid green Spider Plants need less light than variegated Spider Plants. No Spider Plant should ever be put in the direct sun.',
            Fertilizer: 'Fertilize a Spider Plant once a month with a balanced plant food at 1/2 the recommended strength. Spider Plants need food only when they are actively growing. Feeding a Spider Plant too often causes the tips of the leaves to turn brown.',
            Soil: 'Spider Plants grow well in a good organic houseplant soil. An African Violet soil is very good for Spider plants also.',
            img: 'http://gardeners.s3.amazonaws.com/p/VETOM30892_3.jpg'
          }]
  let result = plantFacts.filter((plant) => plant.Common_Name === name);
  console.log(result);
  res.send(result);
});

// connect to our database
db.connect(function (err) {
  if (err) throw err;
  // execute a query on our database
  db.query('SELECT id, user_name from api.users', function (err, result) {
    if (err) throw err;
    // just print the result to the console
    console.log(result.rows[1], "query result"); // outputs: { user_name: 'Phoebe Maio' }
    // disconnect the client
    db.end(function (err) {
      if (err) throw err;
    });
  });
});

app.get('/', (req, res) => res.redirect('/index.html'));

// ******************************    only here to gather data, REMOVE ME *******************************

app.get('/gather', (req, res) => {

    let url = 'http://www.houseplantsexpert.com/a-z-list-of-house-plants.html';

    var data = 'blah ';
    // The callback function takes 3 parameters, an error, response status code and the html
    request(url, function(error, response, html){
      console.log('inside data :', data);

        if(!error){
            const $ = cheerio.load(html);

           let classs = $.root('.simplePagerPage1').find('a').text();
           // let class2 = $.root('.simplePagerPage1 a').text();
           // let class3 = $.root('.simplePagerPage1').children().find('a').text();
           // let class4 = $.root('.simplePagerPage1').children().find('a').attr('href');
           let name = $('h1').text();

             $(".simplePagerPage1").each(function() {
              console.log('works');
              console.log($(this));
                var plant = $(this).find('a');;
                var text = plant.text();
                var href = plant.attr("href");
                console.log(text + " -> " + href);
              });
             console.log(name, typeof name);
             // console.log(class2);
             data += classs;
             res.send(data);
             // console.log(classs);
        } else {
          console.log(error);
        }
    });
})

// ***************************************** end ***********************************

