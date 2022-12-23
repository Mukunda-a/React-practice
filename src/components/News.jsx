import React from "react";
import { useEffect } from "react";
import { useState } from "react";
function News()
{
    let[weather,setWeather]=useState([])
    useEffect(()=>{
        setTimeout(()=>{
         let myuser=fetch("https://newsapi.org/v2/everything?q=Apple&from=2022-10-24&sortBy=popularity&apiKey=e2478f9c7db14037b5d4112614ba2cfa")
         myuser.then((response)=>{
           return response.json()
         })
         .then((data)=>{
            console.log(data)
            setWeather(data.articles)})
         .catch((error)=>{console.log(error);})
        },3000)
  },[])
return(
    <div>
<table border={"5px"}>
    <thead>
        <tr>
            <th>id</th>
            <th>description</th>
            <th>publishedAt</th>
            <th>image</th>
        </tr>
    </thead>
    <tbody>
        {weather.map((user,index)=>{
          return(
           <tr key={user.id}>
          <td>{user.source.id}</td>
           <td>{user.description}</td>
           <td>{user.publishedAt}</td>
             <td>
                <img src={user.urlToImage} alt="" height={"200"} width={"200"}/>
             </td>
          </tr>
          )
        })}
    </tbody>
</table>
    </div>
)
}
export default News;