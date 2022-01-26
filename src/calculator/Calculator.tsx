import './Calculator.css';
import React from 'react'
import { TypeOfTag } from 'typescript'
import Grid from './Grid';
import Output from './Screen';

interface ICalculator {
  screen : string,
  grid: string
}

const Calculator : React.FC<ICalculator> = ({ screen, grid }) => {
  return (

<div className='calculator'>
  
</div>
  )
}

export default Calculator;