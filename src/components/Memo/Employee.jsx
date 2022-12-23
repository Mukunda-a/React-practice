import React, {memo} from 'react'


function Employee({sal}) {

    console.log("Employee Rendered")

  return (
    <div>
    Employee: {sal}

    </div>
  )
}

export default memo(Employee)
