import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ item }) => {
  const stringArr = item.itemName.split(' ');
  let stringOne = [];
  let stringTwo = [];
  let rating;

  for (let i = 0; i < stringArr.length; i += 1) {
    if (i < 2) {
      stringOne.push(stringArr[i]);
    } else {
      stringTwo.push(stringArr[i]);
    }
  }

  return (
    <div>
      <img src={item.photoURL} alt="" />
      <div className="flex-item-content">
        <div className="item-name">
          <div className="item-brand">{item.brandName}</div>
          {stringOne.join(' ')}
          <br />
          {stringTwo.join(' ')}
        </div>
        <div className="item-rating">{item.itemRating}</div>
        <div className="item-rating-count">{item.ratingCount}</div>
        <div className="item-price">{item.itemPrice}</div>
      </div>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
};

export default Item;
