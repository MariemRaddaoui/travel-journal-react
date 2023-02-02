import React from "react";

export default function Country(props){
    return(
        <div className="card">
            <div>
                <img className="country--img" src={`${props.item.imageUrl}`}/>
            </div>
            <div>
                <img className="location--img" src="../images/location-icon.png"/>
                <span className="country--location">{props.item.location}</span>
                <a className="maps" onClick={()=>window.open(`${props.item.googleMapsUrl}`,"Popup")}>View on Google Maps</a>
                <h1 className="country--title">{props.item.title}</h1>
                <h4 className="date">{props.item.startDate} - {props.item.endDate}</h4>
                <p className="country--description">{props.item.description}</p>
            </div>
        </div>
    )
}