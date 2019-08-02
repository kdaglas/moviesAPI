const express = require('express');
const movies = require('../movies');
const Serie = require('../models/Serie');

const router = express.Router();

router.get('/series', (req, res) => {
  res.send(movies);
});

router.get('/series/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const serie = await Serie.findById(id);
    if (!serie) {
      return res
        .status(400)
        .send({ message: 'Cannot find Serie with that id' });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/series', async (req, res) => {
  try {
    const series = await Serie.insertMany(movies);
    res.send(series);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
