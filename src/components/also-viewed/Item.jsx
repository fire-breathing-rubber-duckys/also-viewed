import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ item }) => (
  <div className="flex-item">
    <img src={item.photoURL} alt="" />
    <div>{item.brandName}</div>
    <div>{item.itemName}</div>
    <div>{item.itemRating}</div>
    <div>{item.ratingCount}</div>
    <div>{item.itemPrice}</div>
  </div>
);

Item.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
};

export default Item;
