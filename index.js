// Base code taken from https://www.twilio.com/blog/automate-your-job-search-with-twitter-and-twilio-programmable-sms by Shajia Abidi

const Twit = require('twit'); 
const ObjectsToCsv = require('objects-to-csv');
require('dotenv').config()


// Instantiate instance of Twit and configure with keys from .env
var T = new Twit({
  consumer_key:    process.env.API_KEY,
  consumer_secret: process.env.API_SECRET_KEY,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret:  process.env.ACCESS_TOKEN_SECRET
});

// Search Tweets using Twit; will later incorporate params from CLI
 T.get('search/tweets', { q: 'looking for frontend', count: 1 }, async (err, data, response) => {
   console.log(data);
 })
 
 // Save res to object & map over to save required data & push to new array
   const statuses = data.statuses;
  const tweets = [];

  statuses.map(status => {
    tweets.push({
      time: status.created_at,
      text: status.text,
      name: status.user.name,
      screen_name: status.user.screen_name,
      tweet_url: `https://twitter.com/${status.user.screen_name}/status/${status.id_str}`
    });
    
  // Pass array to ObjectsToCsv for conversion
  const csv = await new ObjectsToCsv(tweets)
    await csv.toDisk('./tweets.csv', { append: true })

  });
