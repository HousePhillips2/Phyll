const request = require('request');
const cheerio = require('cheerio');

const floweringList = [
  'http://www.houseplantsexpert.com/hippeastrum-amaryllis.html',
  'http://www.houseplantsexpert.com/african-violet-care-information.html',
  'http://www.houseplantsexpert.com/angel-wing-begonia.html',
  'http://www.houseplantsexpert.com/barberton-daisy.html',
  'http://www.houseplantsexpert.com/beach-spider-lily.html',
  'http://www.houseplantsexpert.com/growing-belladonna-lily-plants-indoors.html',
  'http://www.houseplantsexpert.com/bird-of-paradise-plant.html',
  'http://www.houseplantsexpert.com/blushing-bromeliad.html',
  'http://www.houseplantsexpert.com/busy-lizzie.html',
  'http://www.houseplantsexpert.com/growing-calla-lilly-plants-indoors-and-care.html',
  'http://www.houseplantsexpert.com/coral-berry-plant.html',
  'http://www.houseplantsexpert.com/cattleya-corsage-orchids.html',
  'http://www.houseplantsexpert.com/cyclamen-persicum.html',
  'http://www.houseplantsexpert.com/eternal-flame-calathea-crocata.html',
  'http://www.houseplantsexpert.com/false-shamrock-plant.html',
  'http://www.houseplantsexpert.com/flamingo-flower.html',
  'http://www.houseplantsexpert.com/flaming-sword-bromeliad.html',
  'http://www.houseplantsexpert.com/flowering-maple.html',
  'http://www.houseplantsexpert.com/kaffir-lily.html',
  'http://www.houseplantsexpert.com/lollipop-plant.html',
  'http://www.houseplantsexpert.com/lycaste-orchid.html',
  'http://www.houseplantsexpert.com/madagascar-jasmine.html',
  'http://www.houseplantsexpert.com/tillandsia-caput-medusae.html',
  'http://www.houseplantsexpert.com/moth-orchid.html',
  'http://www.houseplantsexpert.com/ornamental-pepper-plant.html',
  'http://www.houseplantsexpert.com/peace-lily-plant.html',
  'http://www.houseplantsexpert.com/poinsettia-plant.html',
  'http://www.houseplantsexpert.com/poison-primrose.html',
  'http://www.houseplantsexpert.com/rose-of-china.html',
  'http://www.houseplantsexpert.com/bromeliad-scarlet-star.html',
  'http://www.houseplantsexpert.com/paphiopedlium-slipper-orchid.html',
  'http://www.houseplantsexpert.com/the-one-colored-paphiopedilum-concolor.html',
  'http://www.houseplantsexpert.com/urn-plant.html',
  'http://www.houseplantsexpert.com/winter-cherry-plant.html'
];

const foliageList = [
  'http://www.houseplantsexpert.com/aluminum-plant.html',
  'http://www.houseplantsexpert.com/areca-palm.html',
  'http://www.houseplantsexpert.com/arrowhead-plant.html',
  'http://www.houseplantsexpert.com/birds-nest-fern.html',
  'http://www.houseplantsexpert.com/boston-fern-care-indoors.html',
  'http://www.houseplantsexpert.com/broadleaf-lady-palm.html',
  'http://www.houseplantsexpert.com/canary-island-date-palm.html',
  'http://www.houseplantsexpert.com/cast-iron-plant.html',
  'http://www.houseplantsexpert.com/chinese-evergreen.html',
  'http://www.houseplantsexpert.com/coral-bead-plant.html',
  'http://www.houseplantsexpert.com/dracaena-corn-plant.html',
  'http://www.houseplantsexpert.com/growing-a-creeping-fig-indoors.html',
  'http://www.houseplantsexpert.com/cretan-brake-fern.html',
  'http://www.houseplantsexpert.com/codiaeum-variegatum.html',
  'http://www.houseplantsexpert.com/dumb-cane-plant.html',
  'http://www.houseplantsexpert.com/amazon-elephants-ear-plant.html',
  'http://www.houseplantsexpert.com/european-fan-palm.html',
  'http://www.houseplantsexpert.com/fiddle-leaf-fig.html',
  'http://www.houseplantsexpert.com/golden-pothos-plant.html',
  'http://www.houseplantsexpert.com/green-velvet-alocasia.html',
  'http://www.houseplantsexpert.com/hawaiian-ti-plant.html',
  'http://www.houseplantsexpert.com/caladium-heart-of-jesus.html',
  'http://www.houseplantsexpert.com/heartleaf-philodendron.html',
  'http://www.houseplantsexpert.com/kentia-palm.html',
  'http://www.houseplantsexpert.com/lucky-bamboo-plant.html',
  'http://www.houseplantsexpert.com/madagascar-dragon-tree.html',
  'http://www.houseplantsexpert.com/delta-maidenhair-fern.html',
  'http://www.houseplantsexpert.com/mexican-fortune-tree.html',
  'http://www.houseplantsexpert.com/parlor-palm.html',
  'http://www.houseplantsexpert.com/peacock-plant-calathea-makoyana.html',
  'http://www.houseplantsexpert.com/pin-stripe-calathea-ornata.html',
  'http://www.houseplantsexpert.com/pygmy-date-palm.html',
  'http://www.houseplantsexpert.com/rabbits-foot-fern.html',
  'http://www.houseplantsexpert.com/rattlesnake-plant.html',
  'http://www.houseplantsexpert.com/rose-painted-calathea.html',
  'http://www.houseplantsexpert.com/rubber-plant.html',
  'http://www.houseplantsexpert.com/sago-palm.html',
  'http://www.houseplantsexpert.com/sentry-palm.html',
  'http://www.houseplantsexpert.com/dracaena-song-of-india-plant.html',
  'http://www.houseplantsexpert.com/spider-plant.html',
  'http://www.houseplantsexpert.com/swiss-cheese-plant.html',
  'http://www.houseplantsexpert.com/umbrella-plant.html',
  'http://www.houseplantsexpert.com/venus-fly-trap-plant.html',
  'http://www.houseplantsexpert.com/wandering-jew-plant.html',
  'http://www.houseplantsexpert.com/watermelon-peperomia.html',
  'http://www.houseplantsexpert.com/weeping-fig.html',
  'http://www.houseplantsexpert.com/zebra-plant.html',
  'http://www.houseplantsexpert.com/calathea-zebrina.html',
  'http://www.houseplantsexpert.com/zz-plant.html'
];

const succulentsList = [
  'http://www.houseplantsexpert.com/aloe-vera-house-plant.html',
  'http://www.houseplantsexpert.com/bunny-ear-cactus.html',
  'http://www.houseplantsexpert.com/century-plant.html',
  'http://www.houseplantsexpert.com/christmas-cactus.html',
  'http://www.houseplantsexpert.com/christmas-cheer-sedum-rubrotinctum.html',
  'http://www.houseplantsexpert.com/coral-cactus.html',
  'http://www.houseplantsexpert.com/donkeys-tail-plant.html',
  'http://www.houseplantsexpert.com/easter-cactus.html',
  'http://www.houseplantsexpert.com/housetree-leek-aeonium-arboreum.html',
  'http://www.houseplantsexpert.com/flaming-katy.html',
  'http://www.houseplantsexpert.com/goats-horn-cactus.html',
  'http://www.houseplantsexpert.com/golden-barrel-cactus.html',
  'http://www.houseplantsexpert.com/jade-plant.html',
  'http://www.houseplantsexpert.com/jelly-beans-plant.html',
  'http://www.houseplantsexpert.com/lithops-fulleri.html',
  'http://www.houseplantsexpert.com/mother-in-laws-tongue.html',
  'http://www.houseplantsexpert.com/mother-of-thousands-bryophyllum-daigremontianum.html',
  'http://www.houseplantsexpert.com/orchid-cactus.html',
  'http://www.houseplantsexpert.com/panda-plant.html',
  'http://www.houseplantsexpert.com/peruvian-apple-cactus.html',
  'http://www.houseplantsexpert.com/rat-tail-cactus.html',
  'http://www.houseplantsexpert.com/tiger-jaws-faucaria-tigrina.html',
  'http://www.houseplantsexpert.com/lithops-pseudotruncatella.html',
  'http://www.houseplantsexpert.com/zebra-haworthia.html',
]

//to apply 'scrape' function to the different arrays above (i.e. to scrape different categories of plants):
  // (1)switch out 'floweringList' const below in the for loop for the desired const name.
  // (2) change 'type' property to applicable type ('flowering, succulet, foliage, etc')

const scrape = (res) => {

  const data = [];
  let counter = 0;
  // The callback function takes 3 parameters, an error, response status code and the html

  const scraper = (url, type) => {
    request(url, (error, response, html) => {


      if(!error){
         const $ = cheerio.load(html);

          const plant = {
          id: counter,
          name: "",
          family: "",
          lightS: "",
          lightL: "",
          waterS: "",
          waterL: "",
          soilS: "",
          soilL: "",
          fertilizerS: "",
          fertilizerL: "",
          repotting: "",
          humidityS: "",
          humidityL: "",
          poisonousS: false,
          poisonousL: "",
          type: type
          };

          const plantDetails = [];
          const distribute = $('tbody').last().find('tr').find('td').each(function(){ plantDetails.push($(this).text()) } );

          plant.lightL = plantDetails[3];
          plant.waterL = plantDetails[5];
          plant.soilL = plantDetails[7];
          plant.fertilizerL = plantDetails[9];
          plant.repotting = plantDetails[11];
          plant.humidityL = plantDetails[13];
          plant.name = $('.title-xl').text();
          plant.family = $('.heading-page').text();
          plant.poisonousL = $('b:contains("Poisonous")').parent().next().text();

           data.push(plant);
           counter++;

      } else {
        console.log(error);
      }
  });
};

  for (let i = 0; i < floweringList.length; i++){
    scraper(floweringList[i], 'flowering');
  }
  for (let j = 0; j < foliageList.length; j++){
    scraper(foliageList[j], 'foliage');
  }
  for (let k = 0; k < succulentsList.length; k++){
  scraper(succulentsList[k], 'foliage');
}

  setTimeout(function(){res.send(data)}, 5000);
}

module.exports = scrape;
