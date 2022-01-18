import './Calculator.css';
import React from 'react'
import { TypeOfTag } from 'typescript'
import Grid from './Grid';
import PreviousOperations from './PreviousOperations'
import CurrentOperand from './CurrentOperand'
import Output from './Output'

interface ICalculator {
  preview : IPreviw,
  output : IOutput,
  current: ICurrent,
  grid: IGrid
}

const Calculator : React.FC<ICalculator> = ({ preview, output, current, grid }) => {
  return (

<div className='calculator'>
  
</div>
  )
}

export default Calculator;