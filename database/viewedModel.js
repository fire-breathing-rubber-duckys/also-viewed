const mongoose = require('mongoose');

// People also viewed Schema //
const ViewedSchema = mongoose.Schema({
  productId: Number,
  URL: String,
  brandName: String,
  itemName: String,
  itemRating: Number,
  itemPrice: String,
  ratingCount: Number,
});

module.exports = mongoose.model('Viewed', ViewedSchema);
