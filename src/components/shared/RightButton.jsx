import React from 'react';
import PropTypes from 'prop-types';

const RightButton = ({ handleRightArrow }) => (
  <div>
    <button type="button" className="left-btn-view" onClick={handleRightArrow}>  </button>
  </div>
);

RightButton.propTypes = {
  handleRightArrow: PropTypes.func.isRequired,
};

export default RightButton;
