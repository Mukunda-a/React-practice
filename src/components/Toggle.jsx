import React from 'react'
import ChangeBgGreen from './ChangeBgGreen'

function Toggle() {

    let [hidden, setHidden]= useState(true)
  return (
    <div>
  {(hidden? <ChangeBgGreen/> : <ChangeBgRed/>)}

  <button onClick></button>

    </div>
  )
}

export default Toggle