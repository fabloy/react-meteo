import React from 'react';
import { Link } from 'react-router-dom';


function City(props){

let backgroundVariants = ''
if(props.city.weather[0].main==='Clouds' || props.city.weather[0].main==='Fog'){
  backgroundVariants+='grayStyle'
}else if(props.city.weather[0].main==='Mist'){
  backgroundVariants+='darkBlueStyle'
}else{
  backgroundVariants+='sunnyStyle'
}

return(
  
    <li className={`containerCity ${backgroundVariants}`} onClick={()=>{props.selectCity(props.city)}}>    
    <Link className='city' to="/citydetail">
     <div>
      <p>{props.cityName}</p>
      <p className='day-dayN-month'>
        {props.date.day} {props.date.dayN} <br></br>
        {props.date.month}
      </p>
    </div> 

     <div>
      <img src={props.img}></img>
    </div>
    <div>
     {props.temperature}°
    </div>
    </Link>
    
   
    </li>
)
}

export default City
