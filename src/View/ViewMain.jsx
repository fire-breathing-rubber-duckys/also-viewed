import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { CSSTransitionGroup } from 'react-transition-group';
import Item from './ViewItem';

const MainContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonStyleShow = styled.div`
  border-radius: 50%;
  height: 40px;
  bottom: initial;
  background: #f9f8f6;
  box-shadow: 0 0.4rem 0.4rem 0 rgba(12,11,8,.2);
  border: none;
  outline: none;
`;

const ButtonStyleHide = styled.div`
  height: 40px;
  opacity: 0;
  border: none;
  outline: none;
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

  let currentPage = (
    <div className="flex-box">
      {data.map((item, i) => {
        if (valid.includes(item.productId)) {
          return <Item item={item} key={i} />;
        }
      })}
    </div>
  );

  let rightButton;
  let leftButton;

  if (page === 0) {
    rightButton = (
      <ButtonStyleShow>
        <button
          type="button"
          onClick={() => {
            setPage(1);
          }}>Right</button>
      </ButtonStyleShow>
    );
    leftButton = (
      <ButtonStyleHide>
        <button type="button">Left</button>
      </ButtonStyleHide>
    );
  } else {
    leftButton = (
      <ButtonStyleShow>
        <button
          type="button"
          onClick={() => {
            setPage(0);
          }}>Left</button>
      </ButtonStyleShow>
    );
    rightButton = (
      <ButtonStyleHide>
        <button type="button">right</button>
      </ButtonStyleHide>
    );
  }

  return (
    <div className="main">
      <MainContainer>
        {leftButton}
        <CSSTransitionGroup
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          transitionName="carousel"
        >
          {currentPage}
        </CSSTransitionGroup>
        {rightButton}
      </MainContainer>
    </div>
  );
};

export default ViewMain;
