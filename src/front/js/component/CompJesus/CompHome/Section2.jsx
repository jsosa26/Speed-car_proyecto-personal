import React from "react"
// import glasses from "../../img/glasses.png";
// import heartemoji from "../../img/heartemoji.png";
// import humble from "../../img/humble.png";
import "./Section2.css"
import {Card} from "../CompHome/card/Card.jsx";

export const Section2 = () => {
    return (
        <div className="Servicios">
            {/* Lado Izquierdo */}
            <div className="awesome">
                <span>Nuestros Servicios</span>
                <span>Son los Mejores</span>
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum eos ullam rerum accusantium labore tenetur ex iusto, suscipit quaerat eaque 
                <br/>    
                eum commodi deleniti enim soluta aliquid nobis ipsum pariatur doloribus!</span>
                <button className="button s-button">Registrate</button>
                <div className="blur s-blurl" style={{ background: "#ABF1FF94"}}></div>
            </div>
            {/* Lado Derecho */}
            <div className="Card">
                <div>
                    <Card
                    // emoji = {HeartEmoji}
                    heading = {'Texto1'}
                    detail = {'Explicacion dfhddjhdio gjsijssp ifgjpsjipoh hshfhshsh hhshs'}
                    />
                </div>
            </div>
        </div>
    )
}