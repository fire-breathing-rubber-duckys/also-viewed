const mongoose = require('mongoose');

const BoughtSchema = mongoose.Schema({
  productName: String,
  related: Array,
});

module.exports = mongoose.model('Bought', BoughtSchema);
