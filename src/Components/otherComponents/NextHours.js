import React from "react";

function NextHours(props){
    return(
        <li className="otherLi">
         <p>{props.date.hour}</p>
         <div className="pointSmall"></div>
        <p>{props.cityName.main.temp}°</p>
        </li>
    )
}

export default NextHours