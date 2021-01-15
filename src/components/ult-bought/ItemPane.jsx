import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import Item from './Item';

const ItemPane = ({ data, currentPage }) => (
  <div>
    <CSSTransitionGroup
      component="div"
      className="flex-container"
      transitionName="carousel"
      transitionEnterTimeout={150}
      transitionLeaveTimeout={300}
    >
      {data.map((item) => {
        if (currentPage.includes(item.productId)) {
          return <Item item={item} key={item.productId} />;
        }
      })}
    </CSSTransitionGroup>
  </div>
);

ItemPane.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  currentPage: PropTypes.instanceOf(Array).isRequired,
};

export default ItemPane;