import React from "react";
import sunny from '../../img/Sunny.png'
import rain from '../../img/rain.png'
import cloudy from '../../img/cloudy.png'

function CardBottom(props){
    return(
        <li className="cardDay">
        <p>{props.date.day}</p>
        <p>{props.cityName.main.temp}°</p>
        <div>
         <img src={
            props.cityName.weather[0].main==="Clouds"|| props.cityName.weather[0].main==="Mist"? cloudy : (props.cityName.weather[0].main==="Clear"? sunny : rain)
         }>
         </img>
       </div>
       </li>
    )
}

export default CardBottom