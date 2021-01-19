import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StarRating from './StarRating';

const ItemWrapper = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 55px;
`;

const ViewItem = ({ item }) => {
  const stringArr = item.itemName.split(' ');
  const ratingCount = ` (${item.ratingCount})`;
  const stringOne = [];
  const stringTwo = [];

  // Logic to filter the itemName to format in a nice fashion //
  if (stringArr[0].length > 8 && stringArr.length === 2) {
    stringOne.push(stringArr[0]);
    stringTwo.push(stringArr[1]);
  } else if (stringArr[0].length > 8 && stringArr.length === 3) {
    stringOne.push(stringArr[0]);
    stringTwo.push(stringArr[1], stringArr[2]);
  } else {
    for (let i = 0; i < stringArr.length; i += 1) {
      if (i < 2) {
        stringOne.push(stringArr[i]);
      } else {
        stringTwo.push(stringArr[i]);
      }
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
          <StarRating rating={item.itemRating} ratingCount={ratingCount} />
          <div className="item-price">{item.itemPrice}</div>
        </div>
      </ItemWrapper>
    </>
  );
};

ViewItem.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
};

export default ViewItem;
