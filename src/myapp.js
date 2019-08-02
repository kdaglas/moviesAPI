const express = require('express');
require('./db/db');
const seriesRouter = require('./routes/series');

const myapp = express();
const port = process.env.PORT || 3000;
const movieRouter = express.Router();

movieRouter.route('/movies').get((req, res) => {
  const response = { Hi: 'whatsup, have you seen spiderman' };
  res.json(response);
});

myapp.use('/api', movieRouter);
myapp.use(seriesRouter);


myapp.listen(port, () => {
  console.log(`Running at port ${port}`);
});
