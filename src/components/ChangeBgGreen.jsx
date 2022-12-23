import React from 'react'

function ChangeBgGreen() {

    
useEffect=()=>
{
    document.body.style.backgroundColor="red"
    return()=>
    {
        document.body.style.backgroundColor="none"
   
    }
}
  return (
    <div>ChangeBgGreen</div>
  )
}

export default ChangeBgGreen