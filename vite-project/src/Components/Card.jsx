import React from "react"

export default function Card(props){
    
    return(
        <div className="card">
            <div className="card--img-container">
                <img src={props.destination.imageUrl} className="card--img"/>
            </div>
            <div className="card--info-container">
                <div className="card--location-container">
                    <i className="fa-solid fa-location-dot"></i>
                    <p className="card--location-name">{props.destination.location}</p>
                    <a href={props.destination.googleMapsUrl} className="card--location-map">View on Google Maps</a>
                </div>
                <h2 className="card--title">{props.destination.title}</h2>
                <p className="card--dates">{`${props.destination.startDate} - ${props.destination.endDate}`}</p>
                <p className="card--description">{props.destination.description}</p>
            </div>
        </div>
       
    )
}
