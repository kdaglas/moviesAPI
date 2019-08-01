const express = require('express');

const myapp = express();
const port = process.env.PORT || 3000;
const movieRouter = express.Router();

movieRouter.route('/movies')
  .get((req, res) => {
    const response = { Hi: 'whatsup, have you seen spiderman' };
    res.json(response);
  });

myapp.use('/api', movieRouter);

myapp.get('/', (req, res) => {
  res.send('welcome to the movies and series API');
});

myapp.listen(port, () => {
  console.log(`Running at port ${port}`);
});
