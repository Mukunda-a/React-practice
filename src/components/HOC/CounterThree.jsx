import React from 'react';
import CounterHOC from './CounterHOC'

function CounterThree(props) {

  console.log(props);
  
  return (
    <div>

      <h1> counterone: {props.mycount}</h1>

      <button onClick={props.updateMycount}>Update</button>

    </div>
  )
}

export default CounterHOC(CounterThree,4)