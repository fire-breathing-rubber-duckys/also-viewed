import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ViewPage from './ViewPage';

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  bottom: initial;
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
        <ViewPage data={data} valid={valid} page={page} />
        {rightButton}
      </MainContainer>
    </>
  );
};

ViewMain.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
};

export default ViewMain;
