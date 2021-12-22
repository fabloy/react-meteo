import React from "react";
import sunny from '../img/Sunny.png'
import rain from '../img/rain.png'
import cloudy from '../img/cloudy.png'
import CardBottom from '../Components/otherComponents/CardBottom'
import NextHours from '../Components/otherComponents/NextHours'
import plus from '../img/plusicon.png'
import TopSectionDetail from "./otherComponents/TopSectionDetail";

function CityDetail(props){
    let backgroundVariants = ''
if(props.cityName.weather[0].main==='Clouds' || props.cityName.weather[0].main==='Fog'){
  backgroundVariants+='grayStyle'
}else if(props.cityName.weather[0].main==='Mist'){
  backgroundVariants+='darkBlueStyle'
}else{
  backgroundVariants+='sunnyStyle'
}

    return(
        <article className={`cityDetailContainer ${backgroundVariants}`}>
        <div>
            <h3>{props.cityName.name}</h3>
            <p>{props.date.day} {props.date.dayN}, {props.date.month}</p>
            <p>{props.cityName.weather[0].main}</p>
        </div>

       <TopSectionDetail
       cityName={props.cityName}
       >
       </TopSectionDetail>
       
        <section className="middleSectionDetail">
            
            <ul>
                <li id="nowLi">
                    <p>Now</p>
                    <div className="point"></div>
                    <div id="line"></div>
                    <p>{props.cityName.main.temp}°</p>
                </li>

                <NextHours 
                date={props.date} 
                cityName={props.cityName}>
               </NextHours>

               <NextHours 
               date={props.date} 
               cityName={props.cityName}>
               </NextHours>

               <NextHours 
               date={props.date} 
               cityName={props.cityName}>
               </NextHours>

               <NextHours 
               date={props.date} 
               cityName={props.cityName}>
               </NextHours>

               <NextHours 
               date={props.date} 
               cityName={props.cityName}>
               </NextHours>
            </ul>
         </section>

         <div className="bottomSectionDetail">
             <ul>
                 {props.giorno.map(el=>{
                    return(
                        <CardBottom date={props.date} cityName={props.cityName}>
                        </CardBottom>
                    )
                 })}
               
             </ul>
         </div>
        
        </article>
    )
}

export default CityDetail