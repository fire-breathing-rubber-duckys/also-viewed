/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ItemWrapper = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 55px;
`;

const Item = ({ item }) => {
  const stringArr = item.itemName.split(' ');
  const ratingCount = `(${item.ratingCount})`;
  const stringOne = [];
  const stringTwo = [];

  for (let i = 0; i < stringArr.length; i += 1) {
    if (i < 2) {
      stringOne.push(stringArr[i]);
    } else {
      stringTwo.push(stringArr[i]);
    }
  }

  return (
    <>
      <ItemWrapper>
        <img src={item.photoURL} alt="" />
        <div>
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
    </>
  );
};

Item.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
};

export default Item;
