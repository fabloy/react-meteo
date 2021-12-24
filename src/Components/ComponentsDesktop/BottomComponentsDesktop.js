import React from "react"
import TopSectionDetail from "../otherComponents/TopSectionDetail"
import NextHours from "../otherComponents/NextHours"
import Search from "../ComponentsDesktop/Search"
import CardBottom from "../otherComponents/CardBottom"
import Localization from "../../Components/ComponentsDesktop/localization"

function BottomComponentsDesktop(props){

    let backgroundVariants = ''
    if(props.cityName.weather[0].main==='Clouds' || props.cityName.weather[0].main==='Fog'){
      backgroundVariants+='grayStyle'
    }else if(props.cityName.weather[0].main==='Mist'){
      backgroundVariants+='darkBlueStyle'
    }else{
      backgroundVariants+='sunnyStyle'
    }

   return(
    <div id="bottomComponentsDesktop">

        <div>
        <p className="today">Today</p>
        <section className={`middleSectionDetail ${backgroundVariants}`}>

          <ul>
                <li id="nowLi">
                    <p>Now</p>
                    <p>{props.cityName.main.temp}°</p>
                </li>

                <li className="otherLi">
                 <p>{props.date.hour}</p>
                 <p>{props.cityName.main.temp}°</p>
                </li>

                <li className="otherLi">
                 <p>{props.date.hour}</p>
                 <p>{props.cityName.main.temp}°</p>
                </li>

                <li className="otherLi">
                 <p>{props.date.hour}</p>
                 <p>{props.cityName.main.temp}°</p>
                </li>
              </ul>
         </section>
        </div>

        <div >
         <div id="thisWeekContainer" >
         <p className={`${backgroundVariants} thisWeek`}>This Week</p>
         <p className="thisWeek">This Month</p>    
         </div>   
         
         <div id="containCard" className={`${backgroundVariants}`}>
         <CardBottom cityName={props.cityName} date={props.date}></CardBottom>
         <CardBottom cityName={props.cityName} date={props.date}></CardBottom>
         <CardBottom cityName={props.cityName} date={props.date}></CardBottom>
         </div>
        </div>

        <div>
        <Search></Search>
         <Localization></Localization>
        </div>

    </div>
   ) 
}

export default BottomComponentsDesktop