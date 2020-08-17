import React from "react"
import "./cards.css"

const Cards = (props) => {
    return (




        <div className="card img-container" style={{ width: 18 + "rem" }}>
            <img className="card-img-top" src={props.image} alt="Card cap"></img>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.type}</p>
                <span><a href={props.link} target="_blank">Click here!</a></span>
            </div>
        </div>


    )
}

export default Cards;