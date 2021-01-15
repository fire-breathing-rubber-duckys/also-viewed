import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LeftButton from '../also-viewed/LeftButton';
import RightButton from '../also-viewed/RightButton';
import ItemPane from './ItemPane';

const UltBought = () => {
  const [currentPage, setCurrentPage] = useState([1, 2, 3, 4, 5, 6]);
  const [buttonStatus, setButtonStatus] = useState('right');
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1337/api/ultimately-bought/fetch')
      .then((response) => {
        setData(response.data[0].related);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  function handleRightArrow() {
    setCurrentPage([6, 7, 8, 9, 10, 11]);
    setButtonStatus('left');
  }

  function handleLeftArrow() {
    setCurrentPage([1, 2, 3, 4, 5, 6]);
    setButtonStatus('right');
  }

  let leftButton;
  let rightButton;

  if (buttonStatus === 'right') {
    rightButton = <RightButton handleRightArrow={handleRightArrow} />;
    leftButton = <></>;
  } else {
    leftButton = <LeftButton handleLeftArrow={handleLeftArrow} />;
    rightButton = <></>;
  }

  return (
    <div className="ult-bought">
      <h1> Customers Ult Bought...</h1>
      {leftButton}
      <ItemPane data={data} currentPage={currentPage} />
      {rightButton}
    </div>
  );
};

export default UltBought;
