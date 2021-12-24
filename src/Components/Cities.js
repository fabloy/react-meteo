import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import City from './City';
import sunny from '../img/Sunny.png'
import rain from '../img/rain.png'
import cloudy from '../img/cloudy.png'
import plus from '../img/plusicon.png'


function Cities(props){


    return(
        <div>
         <h2>Good Morning! Mario</h2>
        <div id='containerAggiungiCitta'>
        <img src={plus}></img>
         <p>Aggiungi città</p>
        </div>
        
       <ul id='containerCities'>
        
        {
           props.cities.map((city, index)=>{
                return(
                  
                    <City
                     key={index}
                     
                     date={props.date} 
                     cityName={city.name} 
                     city={city} 
                     temperature={city.main.temp} 
                     selectCity={props.selectCity}
                     img={city.weather[0].main==="Clouds"|| city.weather[0].main==="Mist"? cloudy : (city.weather[0].main==="Clear"? sunny : rain)}
                     >
                     </City>
                )
            })
        }
      </ul>
       </div>
    )
}
export default Cities