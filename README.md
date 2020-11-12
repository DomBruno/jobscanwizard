# Twitter Scraping Wizard

CLI for easy implementation of Shaja Abidi's Tweet Scraper.

## Dependencies

- Node.js
- Twit
- Objects-to-csv
- dotenv

## Other Prerequisites

- Twitter API Key & Secret Key (obtainable with free [Twitter Developer account](https://developer.twitter.com/en/application/use-case))
- Twitter Access Token & Secret
(obtainable with free [Twitter Developer account](https://developer.twitter.com/en/application/use-case))

## Setup & Configuration

1. Fork and/or clone this repository.
2. Create a file called `.env` in your project's root directory (ie `touch .env`).
3. Add the following code block:
```
export API_KEY=yourAPIKey
export API_SECRET_KEY=YourAPISecretKey
export ACCESS_TOKEN=yourAccessToken
export ACCESS_TOKEN_SECRET=yourAccessTokenSecret
```

...making sure to replace all the placeholders with your information.  
4. Install dependencies (ie `npm install twit objects-to-csv dotenv`).  
5. Edit `app.js` line 17 where `q` is your search string and `count` is the number of tweets to return.
  - `{ q: 'looking for frontend', count: 1 }` might be edited to `{ q: 'looking for Scrum Master', count: 23 }`
  
 ## Usage
 
 1. Ensure you are in your project's root directory.
 2. In your terminal, type: `node app.js`.
