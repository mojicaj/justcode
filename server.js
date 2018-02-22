// load environment variables
require('dotenv').config();

const express = require('express'),
  app = express(),
  port = 5000,
  mongoose = require('mongoose');


app.get('/api/projects', (req, res) => {
  const projects = [
    {id: 1, name: 'Tickybot', description: 'Create a clone of the Tickybot landing page'},
    {id: 2, name: 'Gitlab', description: 'Create a clone of the Gitlab landing page'},
    {id: 3, name: 'Atomist', description: 'Create a clone of Atomist'}
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
