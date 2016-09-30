///////////////    NODE MODULES    ///////////////

const request = require('request');
const CronJob = require('cron').CronJob;

// DEFINE recurring Cron Job

const daily = new CronJob('*/3 * * * * 1-7',
  function() {
  console.log('Every 3 seconds, a bunny is murdered');
}, null, true, 'America/Los_Angeles');



//TEST if cron job pattern is valid -- (copy/paste your cron below)
try {
//     new CronJob('1-60/5 * * * * 1-7', function() {
//   console.log('Every 5 seconds, a bunny is murdered');
// }, null, true, 'America/Los_Angeles');
} catch(ex) {
    console.log("cron pattern not valid");
}
