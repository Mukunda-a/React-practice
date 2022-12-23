import React from 'react'

function ChangeBgRed() {

useEffect=()=>
{
    document.body.style.backgroundColor="red"
    return()=>
    {
        document.body.style.backgroundColor="none"
   
    }
}

  return (
    <div>


    </div>
  )
}

export default ChangeBgRed