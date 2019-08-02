const mongoose = require('mongoose');

const SeriesSchema = new mongoose.Schema({
  title: String,
  description: String,
  time: String,
  image: String,
});

const Serie = mongoose.model('Serie', SeriesSchema);

module.exports = Serie;
