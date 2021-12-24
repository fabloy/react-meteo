import React from "react"
import search from '../../img/Search.png'

function Search(){
    return(
        <div id="search">
            <p className="today">Search</p>
            <div>
            <input placeholder="ex: Miami"></input>
            <button><img src={search}></img></button>
            </div>
        
        </div>
    )
}

export default Search