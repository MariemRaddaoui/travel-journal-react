import React from "react";

export default function Country(props){
    return(
        <div>
            <div>
                <img src={`${props.item.imageUrl}`}/>
            </div>
            <div>
                <p>{props.item.location}</p>
                <a>View on Google Maps</a>
                <h1>{props.item.title}</h1>
                <h4>{props.item.startDate} - {props.item.endDate}</h4>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}