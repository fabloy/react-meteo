import React from "react";
import sunny from '../../img/Sunny.png'
import rain from '../../img/rain.png'
import cloudy from '../../img/cloudy.png'

function TopSectionDetail(props){
    return(
        <section>
        <div className="topSectionDetail">
            <div>
                <img src={
                    props.cityName.weather[0].main==="Clouds"|| props.cityName.weather[0].main==="Mist"? cloudy : (props.cityName.weather[0].main==="Clear"? sunny : rain)
                }>
                </img>
        </div>
            <h3 id="topSectionTemperature">
                {props.cityName.main.temp}°
            </h3>
        </div>
        </section>
    )
}

export default TopSectionDetail