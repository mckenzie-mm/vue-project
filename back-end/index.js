const express = require('express');
const app = express();
const port = 8080;

// Respond to GET request on the root route
app.get('/', (req, res) => {
  res.send('GET request to the homepage');
});

// Respond to POST request on the root route
app.post('/', (req, res) => {
  res.send('POST request to the homepage');
});

// Respond to GET request on the /about route
app.get('/about', (req, res) => {
  res.send('About page');
});

// Catch all other routes
// note v5 of express js requires a name in the catch all route (dumb idea)
// https://expressjs.com/en/guide/migrating-5.html#path-syntax
//
app.all('*splat', (req, res) => {
//   res.status(404).send('404 - Page not found');
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


console.log("Example app listening at");