import React from 'react'
import { useState } from 'react'

function CounterHOC(OriginalComponent, countValue) {

    function NewComponent()
    
    {
    
        let [count, setCount] = useState(0)

        let updateCount = () => {
          setCount(count + countValue)
      
        }
     return <OriginalComponent mycount={count}  updateMycount={updateCount} />

    }
  return NewComponent
}

export default CounterHOC;
