const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());


// store for dummy data
const store = {
    posts: [
    {
        id: 1,
        title: 'Post',
        description: 'This is my description 1',
        date: new Date()
    }, {
        id: 2,
        title: 'Post',
        description: 'This is my description 2',
        date: new Date()
    }, {
        id: 3,
        title: 'Post',
        description: 'This is my description 3',
        date: new Date()
    }
]
};

// Respond to GET request on the /blogs route
app.get('/blogs', (req, res) => {
  res.send({ data: store.posts });
});

// Respond to GET request on the /blogs route
app.get('/blogs/:id', (req, res) => {
  const post = store.posts.find(x => x.id === parseInt(req.params.id))
  res.send({ data: post });
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