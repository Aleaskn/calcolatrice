import './Output.css';
import React from 'react'
import { TypeOfTag } from 'typescript'

interface IOutput {
output: string
}

const Output : React.FC<IOutput> = ({ output }) => {
  return (

<div className='calculator__output'></div>
  )
}

export default Output;