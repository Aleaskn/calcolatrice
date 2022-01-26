import './Screen.css';
import React from 'react'
import { TypeOfTag } from 'typescript'

interface IScreen {
screen: string
}

const Output : React.FC<IScreen> = ({ screen }) => {
  return (

<div className='calculator__output'></div>
  )
}

export default Screen;