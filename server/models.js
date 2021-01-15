const Bought = require('../database/boughtModel.js');
const Viewed = require('../database/viewedModel.js');

const fetchAlsoViewed = (callback) => {
  Viewed.find({}, (error, response) => {
    if (error) {
      callback(error);
    } else {
      callback(null, response);
    }
  });
};

const fetchBought = (callback) => {
  Bought.find({}, (error, response) => {
    if (error) {
      callback(error);
    } else {
      callback(null, response);
    }
  });
};

module.exports = {
  fetchAlsoViewed, fetchBought,
};
