///////////////    NODE MODULES    ///////////////

const request = require('request');
const CronJob = require('cron').CronJob;

// DEFINE recurring Cron Job:

const daily = new CronJob('*/3 * * * * 1-7',
  function() {
    request('http://localhost:8080/io/dailyData', function(error, response, body){
      // pull out the two devices
      if (body){
        const bod = JSON.parse(body),
              one = bod[0],
              two = bod[1],
              device1 = {
                light: ['somethn'],
                moisture: []
              },
              device2 = {
                light: [],
                moisture: []
              };

        // identify lowest number from array of numbers
        const lowest = (arr) => {
          return arr.reduce((accumulator, next) => {
            return next < accumulator ? next : accumulator;
          })
        };

        // identify lowest number from array of numbers
        const highest = (arr) => {
          return arr.reduce((accumulator, next) => {
            return next > accumulator ? next : accumulator;
          })
        };

        // calculate an average from array of numbers
        const avg = (arr) => {
          const arrToNumbers = arr.map((element)=>{
            return Number(element);
          });

          const data = arrToNumbers.reduce(function(acc, val) {
            return [acc[0] + val, ++acc[1]];
          }, [0, 0]);

          return data[0] / data[1];
        };

        // reduce an array into the following three numbers within it: (1) lowest (2) average (3) highest
        const filler = (arr) => {
          let result = [];
          result.push(lowest(arr));
          result.push(avg(arr));
          result.push(highest(arr));
          return result;
        };

        //
        device1.light = filler(one.light);
        device1.moisture = filler(one.moisture);
        device2.light = filler(two.light);
        device2.moisture = filler(two.moisture);

        console.log('l1', device1.light, 'm1', device1.moisture, 'l2', device2.light, 'm2', device2.moisture);
      }
    });
  }, null, true, 'America/Los_Angeles');


//TEST if cron job pattern is valid -- (copy/paste your cron below)
try {
//     new CronJob('1-60/5 * * * * 1-7', function() {
//   console.log('Every 5 seconds, a bunny is murdered');
// }, null, true, 'America/Los_Angeles');
} catch(ex) {
    console.log("cron pattern not valid");
}
