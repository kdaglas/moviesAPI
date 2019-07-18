const express = require('express');

const myapp = express();

const port = process.env.PORT || 3000;

myapp.get('/', (req, res) => {
  res.send('welcome to the movies and series API');
});

myapp.listen(port, () => {
  console.log(`Running at port ${port}`);
});
