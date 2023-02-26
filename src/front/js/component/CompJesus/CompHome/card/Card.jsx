import React from "react"
import "./Card.css"

export const Card = ({emoji, heading, details}) => {
    return (
        <div className="Card">
            <img src={emoji}/>
            <span>{heading}</span>
            <span>{details}</span>
            <button className="c-button">Leer más</button>
        </div>
    )
}