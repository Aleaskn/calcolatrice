import './Grid.css';
import React from 'react'
import { TypeOfTag } from 'typescript'

interface IGrid {
  button : string,
  buttonLarge : string
}

const Grid : React.FC<IGrid> = ({ button, buttonLarge }) => {
  return (

<div className='calculator__grid'>

    <button className='double-one'>{ buttonLarge }</button> 

    <button>{ button }</button> 

    <button>{ button }</button> 

    <button>{ button }</button> 

    <button>{ button }</button> 

    <button>{ button }</button> 

    <button>{ button }</button> 

    <button>{ button }</button> 

    <button>{ button }</button> 

    <button>{ button }</button> 

    <button>{ button }</button> 

    <button>{ button }</button> 

    <button>{ button }</button> 

    <button>{ button }</button> 

    <button>{ button }</button> 

    <button>{ button }</button> 

    <button>{ button }</button> 

    <button className='double-two'>{ buttonLarge }</button> 

</div> /* end grid */

  )
}

export default Grid;