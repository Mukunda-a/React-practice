import React,{useState,useEffect} from 'react'

function HospitalData() {

    let [users, setUsers]=useState([]);

    useEffect(()=>{

let myHospitalData= fetch("https://dummyjson.com/users");
 myHospitalData.then((res)=>res.json())
 .then((HospitalData)=>
 {
    console.log(HospitalData)
    setUsers(HospitalData.users)
})
.catch((err)=>{
  console.log(err)

})

},[])
    
  return (
    <div>
     
     <table border="1px">
     <thead>
      <tr>
        <td>SL </td>
        <td>firstname</td>
        <td>lastname</td>
        <td>gender</td>
        <td>Blood group</td>
        <td>eyecolor</td>
        <td>date of birth</td>


        
        
      </tr>
     </thead>
     <tbody>

      {users.map((user,index)=>
      {
         return (
          <tr key={user.id}>

            <td>{index+1}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.gender}</td>
            <td>{user.bloodGroup}</td>
            <td>{user.eyeColor}</td>
            {/* <td> <img src={user.avatar_url} alt="" height="150px" width="150px"   /> </td> */}
            
            <td>{user.birthDate}</td>
          </tr>
      )} )
      }
     </tbody>

     </table>


    </div>
  )
}


export default HospitalData;