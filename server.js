// load environment variables
require('dotenv').config();

const express = require('express'),
  app = express(),
  port = 5000,
  mongoose = require('mongoose');


app.get('/api/projects', (req, res) => {
  const projects = [
    {
    name: 'Tickybot Landing Page',
    tier: 'One',
    type: 'Clone',
    link: 'https://tickybott.herokuapp.com/',
    description: 'Create a clone of the Tickybot landing page'},

  {
    name: 'Gitlab Landing Page',
    tier: 'One',
    type: 'Clone',
    link: 'https://about.gitlab.com/',
    description: 'Create a clone of the Gitlab landing page'
  },

  {
    name: 'Atomist',
    tier: 'One',
    type: 'Clone',
    link: 'https://www.atomist.com/',
    description: 'Create a clone of Atomist'
  },

  {
    name: 'Donut',
    tier: 'One',
    type: 'Clone',
    link: 'https://www.donut.ai/',
    description: 'Create a clone of Donut'
  },

  {
    name: 'Paypal',
    tier: 'One',
    type: 'Clone',
    link: 'https://www.paypal.com/us/home',
    description: 'Create a Paypal clone'
  },

  {
    name: 'Trello',
    tier: 'Two',
    type: 'Clone',
    link: 'https://trello.com/',
    description: 'Create your own version Trello'
  },

  {
    name: 'Chrome extension',
    tier: 'Two',
    type: 'Clone',
    link: 'https://www.makeuseof.com/tag/12-gorgeous-chrome-new-tab-extensions-youve-probably-never-tried/',
    description: 'Create your own extension for the Chrome browser'
  },

  {
    name: 'Jobbatical',
    tier: 'Three',
    type: 'Clone',
    link: 'https://jobbatical.com/',
    description: 'Create your own version of Jobbatical'
  },

  {
    name: 'Airbnb',
    tier: 'Three',
    type: 'Clone',
    link: 'https://www.airbnb.com/',
    description: 'Create your own version of Airbnb'
  },

  {
    name: 'Twitter',
    tier: 'Three',
    type: 'Clone',
    link: 'https://twitter.com/',
    description: 'Create your own version of Twitter'
  }
  ];

  res.json(projects);
});


// static assets
app.use(express.static(__dirname + '/public'));


// connect to database
mongoose.connect(process.env.DB_URI);

// set routes
app.use(require('./app/routes'));

app.listen(port, () => console.log(`Server started on port ${port}`));
