const mongoose = require('mongoose');

const chefSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  specialty: {
    type: String,
  },
  bio: {
    type: String,
  },
  images: {
    type: String,
  }
});

const Chef = mongoose.model('Chef', chefSchema);

module.exports = Chef;