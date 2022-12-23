
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import"./Weatherapi.css"
function Weather()
{
let[api,setApi]=useState(null)

useEffect(()=>{
    let user=fetch("http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=0f34f545c6ca644f9ff6c7f4996cf73f")
    user.then((res)=>{return res.json()})
    .then((data)=>{
        console.log(data);
        setApi(data)
    })
    .catch((err)=>{console.log(err);})
},[])
return(
    <div className="w1">
        
        <h1>weather</h1>
        {api &&
        <div className="weather">
        <h2>City:{api.name}</h2>
        <p>Temp{api.main.temp}</p>
        <p>minTemp{api.main.temp_min}</p>
        <p>maxTemp{api.main.temp_max}</p>
        <p>pressure:{api.main.pressure}</p>
        <p>Humidity:{api.main.humidity}</p>
        </div>
            }
    </div>
)
}
export default Weather;