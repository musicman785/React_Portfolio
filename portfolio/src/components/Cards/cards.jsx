import React from "react"
import "./cards.css"

const Cards = (props) => {
    return (




        <div className="card img-container" style={{ width: 18 + "rem" }}>
            <img className="card-img-top" src={props.image} alt="Card cap"></img>
            <div className="card-body">
                <h5 className="card-title">UB04 Form</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                {/* <a href="#" className="btn btn-primary">GitHub Repo</a> */}
            </div>
        </div>


    )
}

export default Cards;