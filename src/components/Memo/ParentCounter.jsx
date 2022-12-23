import React from 'react'
import { useState } from 'react'
import Employee from './Employee'
import Student from './Student'


function ParentCounter() {

  let [count, setCount] = useState(0)
  let [myage, setMyAge] = useState(21)
  let [myclass, setMyClass] = useState(8)
  let [salary, setSalary] = useState(1000)

  console.log("parent counter rendered")

  return (
    <div>
      <h1> parent counter:{count}</h1>
      <button onClick={() => (setCount(count + 1))}>Updatecount</button>
      <hr />
      <Employee sal={salary} />
      <button onClick={() => (setSalary(salary + 500))}>UpdateSalary</button>
      <hr />
      <Student age={myage} Grade={myclass} />
      <button onClick={() => (setMyAge(myage + 2))}>UpdateAge</button>
      <button onClick={() => (setMyClass(myclass + 1))}>UpdateClass</button>



    </div>
  )
}

export default ParentCounter;
