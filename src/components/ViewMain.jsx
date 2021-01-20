import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CSSTransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import ViewPage from './ViewPage';

const MainContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonStyleShow = styled.div`
  border-radius: 50%;
  height: 40px;
  bottom: initial;
  background: #f9f8f6;
  box-shadow: 1 0.4rem 0.4rem 0 rgba(12,11,8,.2);
  border: none;
  outline: none;
`;

const ButtonStyleShowHover = styled.div`
  border-radius: 50%;
  height: 40px;
  bottom: initial;
  background: #f9f8f6;
  box-shadow: 0 0.6rem 0.6rem 0 rgba(12,11,8,.08);
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
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (page === 0) {
      setValid([1, 2, 3, 4, 5, 6]);
      setHover(false);
    } else {
      setValid([6, 7, 8, 9, 10, 11]);
      setHover(false);
    }
  }, [page]);

  const hoverOn = () => {
    setHover(true);
  };

  const hoverOff = () => {
    setHover(false);
  };

  let rightButton;
  let leftButton;

  if (page === 0 && hover) {
    rightButton = (
      <ButtonStyleShowHover>
        <button
          onMouseEnter={hoverOn}
          onMouseLeave={hoverOff}
          className="btn-right"
          type="button"
          onClick={() => {
            setPage(1);
          }}
        >
          <i className="fa fa-long-arrow-right" />
        </button>
      </ButtonStyleShowHover>
    );
    leftButton = (
      <ButtonStyleHide>
        <button type="button"> </button>
      </ButtonStyleHide>
    );
  } else if (page === 0 && !hover) {
    rightButton = (
      <ButtonStyleShow>
        <button
          onMouseEnter={hoverOn}
          onMouseLeave={hoverOff}
          className="btn-right"
          type="button"
          onClick={() => {
            setPage(1);
          }}
        >
          <i className="fa fa-long-arrow-right" />
        </button>
      </ButtonStyleShow>
    );
    leftButton = (
      <ButtonStyleHide>
        <button type="button"> </button>
      </ButtonStyleHide>
    );
  } else if (page === 1 && hover) {
    leftButton = (
      <ButtonStyleShowHover>
        <button
          onMouseEnter={hoverOn}
          onMouseLeave={hoverOff}
          className="btn-left"
          type="button"
          onClick={() => {
            setPage(0);
          }}
        >
          <i className="fa fa-long-arrow-left" />
        </button>
      </ButtonStyleShowHover>
    );
    rightButton = (
      <ButtonStyleHide>
        <button type="button"> </button>
      </ButtonStyleHide>
    );
  } else {
    leftButton = (
      <ButtonStyleShow>
        <button
          onMouseEnter={hoverOn}
          onMouseLeave={hoverOff}
          className="btn-left"
          type="button"
          onClick={() => {
            setPage(0);
          }}
        >
          <i className="fa fa-long-arrow-left" />
        </button>
      </ButtonStyleShow>
    );
    rightButton = (
      <ButtonStyleHide>
        <button type="button"> </button>
      </ButtonStyleHide>
    );
  }

  return (
    <>
      <MainContainer>
        {leftButton}
        <CSSTransitionGroup
          transitionEnterTimeout={10000}
          transitionLeaveTimeout={10000}
          transitionName="carousel"
        >
          <ViewPage data={data} valid={valid} />
        </CSSTransitionGroup>
        {rightButton}
      </MainContainer>
    </>
  );
};

ViewMain.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
};

export default ViewMain;
