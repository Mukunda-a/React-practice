import React from 'react';
import CounterHOC from './CounterHOC'

function CountOne(props) {

  console.log(props);
  
  return (
    <div>

      <h1> counterone: {props.mycount}</h1>

      <button onClick={props.updateMycount}>update</button>

    </div>
  )
}

export default CounterHOC(CountOne,2)