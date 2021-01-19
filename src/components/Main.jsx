import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ViewMain from './ViewMain';

const Main = () => {
  const [viewData, setViewData] = useState([]);
  const [boughtData, setBoughtData] = useState([]);
  const [itemName, setItemName] = useState('');

  useEffect(() => {
    axios.get('http://localhost:1337/api/top-picks/fetch')
      .then((response) => {
        setViewData(response.data);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:1337/api/ultimately-bought/fetch')
      .then((response) => {
        setBoughtData(response.data[0].related);
        setItemName(` ${response.data[0].productName} `);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  return (
    <>
      <div className="view-main">
        <h1> People Also Viewed </h1>
        <ViewMain data={viewData} />
      </div>
      <div className="bought-main">
        <h1>
          People shopping
          {itemName}
          ultimately bought
        </h1>
        <ViewMain data={boughtData} />
      </div>
    </>
  );
};

export default Main;
