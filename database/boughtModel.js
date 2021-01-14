const mongoose = require('mongoose');

const BoughtSchema = mongoose.Schema({
  productId: Number,
  URL: String,
  brandName: String,
  itemName: String,
  itemRating: Number,
  itemPrice: String,
});

module.exports = mongoose.model('Bought', BoughtSchema);
