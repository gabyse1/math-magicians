import React, { useState } from 'react';
import './Calculator.css';
import BtnComponent from './BtnComponent';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calcObject, setCalcObject] = useState({
    total: null, next: null, operation: null, display: '0',
  });

  const calculateHandler = (btnName) => {
    setCalcObject(calculate(calcObject, btnName));
  };

  return (
    <div className="calc__container">
      <div className="calc__result grid-col-span-4">{calcObject.display}</div>
      <BtnComponent values={['ac', 'AC']} calculateHandler={calculateHandler} />
      <BtnComponent values={['addsub', '+/-']} calculateHandler={calculateHandler} />
      <BtnComponent values={['percen', '%']} calculateHandler={calculateHandler} />
      <BtnComponent values={['divisi', '÷']} calculateHandler={calculateHandler} />
      <BtnComponent values={['7', '7']} calculateHandler={calculateHandler} />
      <BtnComponent values={['8', '8']} calculateHandler={calculateHandler} />
      <BtnComponent values={['9', '9']} calculateHandler={calculateHandler} />
      <BtnComponent values={['multip', 'x']} calculateHandler={calculateHandler} />
      <BtnComponent values={['4', '4']} calculateHandler={calculateHandler} />
      <BtnComponent values={['5', '5']} calculateHandler={calculateHandler} />
      <BtnComponent values={['6', '6']} calculateHandler={calculateHandler} />
      <BtnComponent values={['substr', '-']} calculateHandler={calculateHandler} />
      <BtnComponent values={['1', '1']} calculateHandler={calculateHandler} />
      <BtnComponent values={['2', '2']} calculateHandler={calculateHandler} />
      <BtnComponent values={['3', '3']} calculateHandler={calculateHandler} />
      <BtnComponent values={['add', '+']} calculateHandler={calculateHandler} />
      <BtnComponent values={['0', '0']} calculateHandler={calculateHandler} />
      <BtnComponent values={['dot', '.']} calculateHandler={calculateHandler} />
      <BtnComponent values={['equal', '=']} calculateHandler={calculateHandler} />
    </div>
  );
};

export default Calculator;
