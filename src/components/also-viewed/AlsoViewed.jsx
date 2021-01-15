import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LeftButton from './LeftButton';
import RightButton from './RightButton';
import ItemPane from './ItemPane';

const AlsoViewed = () => {
  const [currentPage, setCurrentPage] = useState([1, 2, 3, 4, 5, 6]);
  const [buttonStatus, setButtonStatus] = useState('right');
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1337/api/top-picks/fetch')
      .then((response) => {
        setData(response.data);
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
    <div className="also-viewed">
      {leftButton}
      <ItemPane data={data} currentPage={currentPage} />
      {rightButton}
    </div>
  );
};

export default AlsoViewed;
