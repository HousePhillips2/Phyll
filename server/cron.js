///////////////    NODE MODULES    ///////////////

const request = require('request');
const CronJob = require('cron').CronJob;

// ---------------------- DEFINE RECURRING DAILY CRON-JOB: --------------------------------
// At 8:30PM daily, retrieve the last 14 hours' (i.e. from 6:30 AM) worth of plant-monitoring data
  // convert data into daily summary (daily low, average, and high readings)
    //send summary to deployed server in order to capture data in Postgres DB

// replace next-line specs with this -- '*/10 * * * * 1-7' -- for test-running every 10 secs
const daily = new CronJob('*/10 * * * * 1-7',
  // '30 21 * * 1-7'
  function() {

    // --------------------------- query MongoDB --------------------------

    // request('http://phyll-dev.herokuapp.com/io/dailyData', function(error, response, body){
    /* uncomment above ^ for production. Uncomment below for development   */
    request('http://localhost:8080/io/dailyData', function(error, response, body){


    // ----------------- extract all existing Phyll devices (currently 2) ----------
      if (body){
        const bod = JSON.parse(body),
              one = bod[0],
              two = bod[1],
              device1 = {
                deviceId: '',
                light: [],
                moisture: []
              },
              device2 = {
                deviceId: '',
                light: [],
                moisture: []
              };

        // -------- identify lowest number from array of numbers ----------
        const lowest = (arr) => {
          const arrToNumbers = arr.map((element)=>{
            return Number(element);
          });
          return arrToNumbers.reduce((accumulator, next) => {
            return next < accumulator ? next : accumulator;
          })
        };

        // -------- identify lowest number from array of numbers ----------
        const highest = (arr) => {
          const arrToNumbers = arr.map((element)=>{
            return Number(element);
          });
          return arrToNumbers.reduce((accumulator, next) => {
            return next > accumulator ? next : accumulator;
          })
        };

        // ---------- calculate an average from array of numbers ----------
        const avg = (arr) => {
          const arrToNumbers = arr.map((element)=>{
            return Number(element);
          });

          const data = arrToNumbers.reduce(function(acc, val) {
            return [acc[0] + val, ++acc[1]];
          }, [0, 0]);

          return data[0] / data[1];
        };

        // -------- reduce an array into the following three measurements within it: (1) lowest (2) average (3) highest -----
        const filler = (arr) => {
          let result = [];
          result.push(lowest(arr));
          result.push(avg(arr));
          result.push(highest(arr));
          return result;
        };

        // --------- populate device data for transmission ------------
        device1.deviceId = one.deviceId;
        device1.light = filler(one.light);
        device1.moisture = filler(one.moisture);
        device2.deviceId = two.deviceId;
        device2.light = filler(two.light);
        device2.moisture = filler(two.moisture);

        var httpRequestOptions = {
          //******* choose which of the subsequent two lines you want to work with (production vs dev)
          url: 'http://localhost:8080/postgres/daily',
          // url: 'http://phyll-dev.herokuapp.com/postgres/daily',
          form: {
            device1: device1,
            device2: device2
          }
        };

        request.post(httpRequestOptions, function(error, response, body){
        });

      }
    });
  }, null, true, 'America/Los_Angeles');


//TEST if cron job pattern/syntax is valid -- (copy/paste your cron below replacing the commented-out block)
try {
//     new CronJob('*/5 * * * * 1-7', function() {
//   console.log('Every 5 seconds, a bunny is murdered');
// }, null, true, 'America/Los_Angeles');
} catch(ex) {
    console.log("cron pattern not valid");
}
