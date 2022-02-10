import React from 'react';
import PropTypes from 'prop-types';

const BtnComponent = (props) => {
  const { values, calculateHandler } = props;
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

// class BtnComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//     this.getBtnContent = this.getBtnContent.bind(this);
//   }

//   getBtnContent(e) {
//     const { calculateHandler } = this.props;
//     calculateHandler(e.target.textContent);
//   }

//   render() {
//     const { values } = this.props;
//     const [id, content] = values;
//     return (
//       <button type="button" className="btn" id={`calc__btn-${id}`} onClick={this.getBtnContent}>
//         {content}
//       </button>
//     );
//   }
// }

BtnComponent.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  calculateHandler: PropTypes.func.isRequired,
};

export default BtnComponent;
