import './App.css';
import home from './img/Home.png'
import location from './img/Location.png';
import search from './img/Search.png'
import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Cities from './Components/Cities';
import CityDetail from './Components/CityDetail';
import BottomComponentsDesktop from './Components/ComponentsDesktop/BottomComponentsDesktop'
import { Link } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';


function App() {

  

  const [cityName, setCityName]= React.useState("modena")
  const [date, setDate] = React.useState({hour:"", day:"", dayN:"", month:"", year:""})

  let data = new Date()
    let giorno =["Lunedi","Martedi","Mercoledi", "Giovedi", "Venerdi", "Sabato", "Domenica"]
    let mese=["Gennaio","Febbraio","Marzo","Aprile","Maggio", "Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"]
    let giornoCorrente =""
    let meseCorrente=""
  const printDate=()=>{
    

    for(let i=0; i<7; i++){
      if(data.getDay()===i){
        giornoCorrente=giorno[i-1]
      }
    }
    for(let j = 0 ; j<12; j++){
      if(data.getMonth()===j){
        meseCorrente=mese[j]
      }
    }
    
    setDate({
      hour: data.getHours(),
      day: giornoCorrente, 
      dayN: data.getDate(), 
      month: meseCorrente, 
      year: data.getFullYear()
    })
  } //printDate è una funzione che elaborara l'oggetto JS Date e a stampare la data del giorno corrente
    //l'api non restituiva la data odierna e mi sono inventato questo sitema
 useEffect(()=>{
   printDate()
  },[])


//Array contenente le città che si vogliono cercare, è possibile aggiungerne infinite
  // il DOM si aggiornerà in modo dinamico
  let nomiCitta= ["Trento", "Catania", "Bologna"] 
  const [cities, setCities] = React.useState([])
  
  const searchCity=()=>{//funzione che itera nomiCittà ed effettua chiamate asincrone per ogni città inserita
    let citiesFound=[]
    for(let i = 0; i<nomiCitta.length; i++){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nomiCitta[i]}&appid=351ccbbd192e79aaf170d92e54dcad11`)
    .then(res=>res.json())
    .then(res => {
      //riduco la lunghezza dei gradi forniti dall'api perchè arrivano con 3 cifre numeriche
      res.main.temp=res.main.temp.toString().substring(0, 2) 

      citiesFound=[...citiesFound, res]
      setCities(citiesFound)
    })
    }
  }

 useEffect(()=>{
    searchCity()
 },[])
 
 const selectCity=(city)=>{
    setCityName(city)
    console.log(city)
  }

  
 function downloadBottomDesktop(){
  if(cities.length>2 && window.screen.width>768){
   return(
    <BottomComponentsDesktop 
    cityName={cities[0]}
    date={date}
    >
    </BottomComponentsDesktop>
   ) 
  }
 }

return (
    <div className="App">
      <BrowserRouter>
       <Routes>

        <Route path='/' element={
         <Cities selectCity={selectCity} date={date} cities={cities}></Cities>
        } />

        <Route path="/citydetail" element={
         <CityDetail cityName={cityName} date={date} giorno={giorno}></CityDetail>
        }></Route>

       </Routes>
      
      
      <ul id='menuDown'>
        <li  className='itemMenu'>
        <Link id='firstImgInMenu'  to="/" >
          <img  src={home}></img>
        </Link>  
        </li>
        <li className='itemMenu'>
          <img  src={search}></img>
        </li>
        <li className='itemMenu'>
          <img  src={location}></img>
        </li>
      </ul>

     
      {
      downloadBottomDesktop()
       }
      </BrowserRouter>

     
    </div>
  );
}

export default App;
