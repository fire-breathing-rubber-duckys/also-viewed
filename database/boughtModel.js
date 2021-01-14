const mongoose = require('mongoose');

const BoughtSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  URL: String,
  brandName: String,
  itemName: String,
  itemRating: Number
});

module.exports = mongoose.model('Bought', BoughtSchema);