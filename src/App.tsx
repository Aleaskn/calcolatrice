import React from 'react';
import './App.css';
import { TypeOfTag } from 'typescript'
import Calculator from './calculator/Calculator'

const calculator = [
  {
    screen: '',
    grid: ''
  }
]

function App() {
  return (
    <div className="App" style={{display : 'flex'}}>
      {
        calculator.map(el => {

          return (
            
            <Calculator data={el} />

          )
        })
      }
    </div>
  );
}

export default App;
