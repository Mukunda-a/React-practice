import React from 'react'
import { useState } from 'react'
import { useMemo } from 'react'

function IsEvenFunction() {
    const[count,setCount]= useState(0)
    const[age, setAge]= useState(0)

    let updateCount=()=>
    {
        setCount(count+1)
    }

    let updateAge=()=>
    {
        setCount(age+1)
    }


    let isEven=useMemo()=>
    {
        for (let i=0, i<=3000000, i++)
        {

        }
        return count%2==0
    },[count]
    console.log(isEven);
  return (
    <div>
  <h1>count:{count}</h1>

    </div>
  )
}

export default IsEvenFunction