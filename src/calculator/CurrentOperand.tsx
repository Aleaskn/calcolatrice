import './CurrentOperand.css';
import React from 'react'
import { TypeOfTag } from 'typescript'

interface ICurrent {
current: string
}

const CurrentOperand : React.FC<ICurrent> = ({ current }) => {
  return (

<div className='calculator__current'></div>
  )
}

export default CurrentOperand;