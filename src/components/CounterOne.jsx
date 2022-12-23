import React from 'react'
import { useEffect } from 'react'

function CounterOne() {

  
  return (
    <div>

      <h1> counter: {count}</h1>
      <button onclick={updateCount}> update</button>

    </div>
  )
}

export default CounterOne