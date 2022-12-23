import React from 'react'
import { useState } from 'react'
import { useMemo } from 'react'
import Button from './Button'
import Count from './Count'

function Parent() {
    const[salary,setSalary]= useState(0)
    const[age, setAge]= useState(0)

    let updateCount=()=>
    {
        setCount(salary+1)
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
    },[salary]
    console.log(isEven);
  return (
    <div>
    <Count sal={salary} text="salary"/>
    <Button />
   
    </div>
  )
}

export default IsEvenFunction