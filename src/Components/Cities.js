import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import City from './City';
import sunny from '../img/Sunny.png'
import rain from '../img/rain.png'
import cloudy from '../img/cloudy.png'
import plus from '../img/plusicon.png'


function Cities(props){
 
//  //Array contenente le città che si vogliono cercare, è possibile aggiungerne infinite
//   // il DOM si aggiornerà in modo dinamico
//   let nomiCitta= ["Trento", "Catania", "Bologna"] 
//   const [cities, setCities] = React.useState([])
  
  

//   const searchCity=()=>{//funzione che itera nomiCittà ed effettua chiamate asincrone per ogni città inserita
//     let citiesFound=[]
//     for(let i = 0; i<nomiCitta.length; i++){
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nomiCitta[i]}&appid=351ccbbd192e79aaf170d92e54dcad11`)
//     .then(res=>res.json())
//     .then(res => {
//       //riduco la lunghezza dei gradi forniti dall'api perchè arrivano con 3 cifre numeriche
//       res.main.temp=res.main.temp.toString().substring(0, 2) 

//       citiesFound=[...citiesFound, res]
//       setCities(citiesFound)
//     })
//     }
//   }

  
//   useEffect(()=>{
//     searchCity()
//  },[])
  

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