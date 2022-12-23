import React,{useEffect, useState} from 'react'

function SimpleUseEffect() {

    let [count1,setCount1]= useState(0)
    let [count2,setCount2]= useState(0)
    let [item, setItem]= useState([])

    let updateItem=()=>
    {
      setItem()
    }


    let updateCount1=()=>
    {
setCount1((pc)=>(pc+1) )
    }

    let updateCount2=()=>
    {
        setCount2((pc)=>(pc+1) )

    }

    useEffect(()=>
    {
        console.log("UseEffect Executed")
     },[setCount1])
  return (
    <div>
    <h1>count:{count1}</h1>
  <button onClick={updateCount1}>update1</button>

    <h1>count:{count2}</h1>

   <button onClick={updateCount2}>update2</button>
   <hr />
   <button onClick={updateItem}>Update item</button>
    </div> 
  )
}

export default SimpleUseEffect