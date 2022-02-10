import React from 'react';
import './Calculator.css';
import BtnComponent from './BtnComponent';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calcObject: {
        total: null, next: null, operation: null, display: '0',
      },
    };
    this.calculateHandler = this.calculateHandler.bind(this);
  }

  calculateHandler(btnName) {
    this.setState((prevState) => ({ calcObject: calculate(prevState.calcObject, btnName) }));
  }

  render() {
    const currentState = this.state;
    return (
      <div className="calc__container">
        <div className="calc__result grid-col-span-4">{currentState.calcObject.display}</div>
        <BtnComponent values={['ac', 'AC']} calculateHandler={this.calculateHandler} />
        <BtnComponent values={['addsub', '+/-']} calculateHandler={this.calculateHandler} />
        <BtnComponent values={['percen', '%']} calculateHandler={this.calculateHandler} />
        <BtnComponent values={['divisi', '÷']} calculateHandler={this.calculateHandler} />
        <BtnComponent values={['7', '7']} calculateHandler={this.calculateHandler} />
        <BtnComponent values={['8', '8']} calculateHandler={this.calculateHandler} />
        <BtnComponent values={['9', '9']} calculateHandler={this.calculateHandler} />
        <BtnComponent values={['multip', 'x']} calculateHandler={this.calculateHandler} />
        <BtnComponent values={['4', '4']} calculateHandler={this.calculateHandler} />
        <BtnComponent values={['5', '5']} calculateHandler={this.calculateHandler} />
        <BtnComponent values={['6', '6']} calculateHandler={this.calculateHandler} />
        <BtnComponent values={['substr', '-']} calculateHandler={this.calculateHandler} />
        <BtnComponent values={['1', '1']} calculateHandler={this.calculateHandler} />
        <BtnComponent values={['2', '2']} calculateHandler={this.calculateHandler} />
        <BtnComponent values={['3', '3']} calculateHandler={this.calculateHandler} />
        <BtnComponent values={['add', '+']} calculateHandler={this.calculateHandler} />
        <BtnComponent values={['0', '0']} calculateHandler={this.calculateHandler} />
        <BtnComponent values={['dot', '.']} calculateHandler={this.calculateHandler} />
        <BtnComponent values={['equal', '=']} calculateHandler={this.calculateHandler} />
      </div>
    );
  }
}

export default Calculator;
