import React from 'react';
import point from './placeholder.png';

export default function Card(props) {
    const location_cap = props.item.location.toUpperCase();

    return(
        <div className="container">
            <div className="card">
                <img src={props.item.imageUrl} alt="Photo" className="photo"/>
                <div className="card-info">
                    <img src={point} alt="Point" className="placeholder"/>
                    <p className="location">{location_cap}
                        <a href={props.item.googleMapsUrl}><span className="google">View on Google Maps</span></a>
                    </p>

                    <h1 className="title">{props.item.title}</h1>
                    <p className="dates">{props.item.startDate} - {props.item.endDate}</p>
                    <p>{props.item.description}</p>
                </div>
                <div className="card-desc">

                </div>

            </div>
        </div>

    )
}