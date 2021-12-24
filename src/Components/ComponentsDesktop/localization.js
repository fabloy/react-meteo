import React from "react";
import location from "../../img/Location.png"
function localization(){
    return(
        <div id="localization">
            <div className="localization">
                Location
            </div>
            <section>
            <div>
                <img src={location} ></img>
                <p style={{"color":"white"}}>Add localization</p>
            </div>
            </section>
           
         </div>
    )
}

export default localization