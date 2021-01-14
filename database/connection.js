const mongoose = require('mongoose');
const connection = mongoose.connect('mongodb://localhost:27012/also-viewed', { useNewUrlParser: true });

module.exports = connection;