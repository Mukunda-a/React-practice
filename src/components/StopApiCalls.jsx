import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'

function StopApiCalls() {


  useEffect(() => {

    let ac = new AbortController()

    // !Effect

    let getUsers = async () => {
      try {
        let { data } = await axios.get("https://api.github.com/users",
          { signal: ac.signal })
        console.log(data);
      }
      catch (err) {
        console.log(err)
      }
    }
    getUsers()

    return () => {
      ac.abort()
      

    }
  },)

  return (
    <div>StopApiCalls</div>
  )
}

export default StopApiCalls;