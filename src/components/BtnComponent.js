import React from 'react';
import PropTypes from 'prop-types';

const BtnComponent = ({ values, calculateHandler }) => {
  const [id, content] = values;

  const getBtnContent = (e) => {
    calculateHandler(e.target.textContent);
  };

  return (
    <button type="button" className="btn" id={`calc__btn-${id}`} onClick={getBtnContent}>
      {content}
    </button>
  );
};

BtnComponent.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  calculateHandler: PropTypes.func.isRequired,
};

export default BtnComponent;
