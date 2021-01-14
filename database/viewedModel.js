const mongoose = require('mongoose');

// People also viewed Schema //
const ViewedSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  URL: String,
  brandName: String,
  itemName: String,
  itemRating: Number
});

module.exports = mongoose.model('Viewed', ViewedSchema);