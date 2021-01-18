import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ItemWrapper = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 55px;
`;

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

  let ratingCount = `(${item.ratingCount})`;
  return (
    <div>
      <ItemWrapper>
        <img src={item.photoURL} alt="" />
        <div className="flex-item-content">
          <div className="item-name">
            <div className="item-brand">{item.brandName}</div>
            {stringOne.join(' ')}
            <br />
            {stringTwo.join(' ')}
          </div>
          <label className="item-rating">{item.itemRating}</label>
          <label className="item-rating-count">{ratingCount}</label>
          <div className="item-price">{item.itemPrice}</div>
        </div>
      </ItemWrapper>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
};

export default Item;
