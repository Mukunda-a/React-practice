import React from 'react'

function Student({age,Grade}) {
    console.log("student rendered");
  return (
    <div>
      student:{age}
      <br />
      student:{Grade}
    </div>
  )
}

export default React.memo(Student)
