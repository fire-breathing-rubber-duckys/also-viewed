import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { CSSTransitionGroup } from 'react-transition-group';
import Item from './ViewItem';

const MainContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  margin: 5px;
`;

const ViewMain = ({ data }) => {
  const [page, setPage] = useState(0);
  const [valid, setValid] = useState([1, 2, 3, 4, 5, 6]);

  useEffect(() => {
    if (page === 0) {
      setValid([1, 2, 3, 4, 5, 6]);
    } else {
      setValid([6, 7, 8, 9, 10, 11]);
    }
  }, [page]);


  let currentPage = data.map((item, i) => {
    if (valid.includes(item.productId)) {
      return <Item item={item} key={i} />;
    }
  });

  return (
    <div className="main">
      <MainContainer>
        <button
          type="button"
          onClick={() => {
            setPage(0);
          }}>Left</button>
        <CSSTransitionGroup
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          transitionName="carousel"
        >
          <MainContainer>
            {currentPage}
          </MainContainer>
        </CSSTransitionGroup>
        <button
          type="button"
          onClick={() => {
            setPage(1);
          }}>Right</button>
      </MainContainer>
    </div>
  );
};

export default ViewMain;
