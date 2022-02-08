import React from 'react';
import PropTypes from 'prop-types';
import './Calculator.css';

const BtnComponent = ({ values }) => {
  const [id, content, bg] = values;
  return (<button type="button" className={`btn ${bg}`} id={`calc__btn-${id}`}>{content}</button>);
};

BtnComponent.propTypes = {
  values:
    PropTypes.arrayOf(PropTypes.shape(
      {
        id: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        bg: PropTypes.string.isRequired,
      },
    )).isRequired,
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
        <BtnComponent values={['ac', 'AC', 'bg-gral']} />
        <BtnComponent values={['addsub', '+/-', 'bg-gral']} />
        <BtnComponent values={['percen', '%', 'bg-gral']} />
        <BtnComponent values={['divisi', '/', 'bg-accent']} />
        <BtnComponent values={['7', '7', 'bg-gral']} />
        <BtnComponent values={['8', '8', 'bg-gral']} />
        <BtnComponent values={['9', '9', 'bg-gral']} />
        <BtnComponent values={['multip', 'x', 'bg-accent']} />
        <BtnComponent values={['4', '4', 'bg-gral']} />
        <BtnComponent values={['5', '5', 'bg-gral']} />
        <BtnComponent values={['6', '6', 'bg-gral']} />
        <BtnComponent values={['substr', '-', 'bg-acent']} />
        <BtnComponent values={['1', '1', 'bg-gral']} />
        <BtnComponent values={['2', '2', 'bg-gral']} />
        <BtnComponent values={['3', '3', 'bg-gral']} />
        <BtnComponent values={['add', '+', 'bg-accent']} />
        <BtnComponent values={['0', '0', 'bg-gral']} />
        <BtnComponent values={['dot', '.', 'bg-gral']} />
        <BtnComponent values={['equal', '=', 'bg-accent']} />
      </div>
    );
  }
}

export default Calculator;
