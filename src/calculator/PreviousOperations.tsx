import './PreviousOperation.css';
import React from 'react'
import { TypeOfTag } from 'typescript'

interface IPreview {
  operations : string
}

const PreviousOperations : React.FC<IPreview> = ({ operations }) => {
  return (
<div className='calculator__preview'>



</div> /* end preview */

  )
}

export default PreviousOperations;