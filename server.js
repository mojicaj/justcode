const express = require('express'),
  app = express(),
  port = 5000;

app.get('/api/projects', (req, res) => {
  const projects = [
    {id: 1, name: 'Tickybot', description: 'Create a clone of the Tickybot landing page'},
    {id: 2, name: 'Gitlab', description: 'Create a clone of the Gitlab landing page'},
    {id: 3, name: 'Atomist', description: 'Create a clone of Atomist'}
  ];

  res.json(projects);
});

app.listen(port, () => console.log(`Server started on port ${port}`));
