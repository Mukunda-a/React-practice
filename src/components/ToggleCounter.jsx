import React from 'react'
import { useState } from 'react'
import CounterOne from './CounterOne'
import CounterTwo from './CounterTwo'


function ToggleCounter() {

let [isbool, setIsBool]= useState(true)

  return (
    <div>
{isbool?<CounterOne/>:<CounterTwo/>}

<button onClick={()=>(setIsBool(!isbool))}>
{isbool?"counter Two":"Count one"}

</button>


    </div>
  )
}

export default ToggleCounter;