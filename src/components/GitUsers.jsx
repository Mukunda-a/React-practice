import React,{useState,useEffect} from 'react'

function GitUsers() {

    let [users, setUsers]=useState([]);

    useEffect(()=>{

let myusers= fetch("https://api.github.com/users");
 myusers.then((res)=>res.json())
 .then((gitusers)=>
 {
    console.log(gitusers)
    setUsers(gitusers)
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
        <td>Name</td>
        <td>node_id</td>
        <td>img</td>

        
        
      </tr>
     </thead>
     <tbody>

      {users.map((user,index)=>
      {
         return (
          <tr key={user.id}>

            <td>{index+1}</td>
            <td>{user.login}</td>
            <td>{user.node_id}</td>
            <td> <img src={user.avatar_url} alt="" height="150px" width="150px"   /> </td>
            
            <td>{user.avatar_url}</td>
          </tr>
      )} )
      }
     </tbody>

     </table>


    </div>
  )
}


export default GitUsers;