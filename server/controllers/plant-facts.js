///////////////    NODE MODULES    ///////////////
const express = require('express');
const router  = express.Router();

router.post('/', (req, res) => {

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
          }];

  let result = plantFacts.filter((plant) => plant.Common_Name === name);
  console.log(result);

  res.send(result);

});

module.exports = router;
