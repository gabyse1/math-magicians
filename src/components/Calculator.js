import React from 'react';
import PropTypes from 'prop-types';
import './Calculator.css';

const BtnComponent = ({ values }) => {
  const [id, content] = values;
  return (<button type="button" className="btn" id={`calc__btn-${id}`}>{content}</button>);
};

BtnComponent.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
};

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calc__container">
        <div className="calc__result grid-col-span-4">0</div>
        <BtnComponent values={['ac', 'AC']} />
        <BtnComponent values={['addsub', '+/-']} />
        <BtnComponent values={['percen', '%']} />
        <BtnComponent values={['divisi', '/']} />
        <BtnComponent values={['7', '7']} />
        <BtnComponent values={['8', '8']} />
        <BtnComponent values={['9', '9']} />
        <BtnComponent values={['multip', 'x']} />
        <BtnComponent values={['4', '4']} />
        <BtnComponent values={['5', '5']} />
        <BtnComponent values={['6', '6']} />
        <BtnComponent values={['substr', '-']} />
        <BtnComponent values={['1', '1']} />
        <BtnComponent values={['2', '2']} />
        <BtnComponent values={['3', '3']} />
        <BtnComponent values={['add', '+']} />
        <BtnComponent values={['0', '0']} />
        <BtnComponent values={['dot', '.']} />
        <BtnComponent values={['equal', '=']} />
      </div>
    );
  }
}

export default Calculator;
