import React from 'react';
import PropTypes from 'prop-types';

const LeftButton = ({ handleLeftArrow }) => (
  <div>
    <button type="button" className="left-btn-view" onClick={handleLeftArrow}>  </button>
  </div>
);

LeftButton.propTypes = {
  handleLeftArrow: PropTypes.func.isRequired,
};

export default LeftButton;
