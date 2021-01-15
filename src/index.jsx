import React from 'react';
import { render } from 'react-dom';
import AlsoViewed from './components/AlsoViewed';
import UltBought from './components/UltBought';

const Main = () => (
  <div>
    Main Has Rendered
    <AlsoViewed />
    <UltBought />
  </div>
);

render(<Main />, document.getElementById('app'));
