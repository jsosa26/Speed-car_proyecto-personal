import React from "react"
// import glasses from "../../img/glasses.png";
// import heartemoji from "../../img/heartemoji.png";
// import humble from "../../img/humble.png";
import "../CompHome/Section2.css"
import {Card} from "../CompHome/card/Card.jsx";

export const Section2 = () => {
    return (
        <div className="Servicios">
            {/* Lado Izquierdo */}
            <div className="awesome">
                <span>Nuestros Servicios</span>
                <span>Son los Mejores</span>
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/> Nostrum eos ullam rerum accusantium labore tenetur ex iusto,<br/> suscipit quaerat eaque
                eum commodi deleniti enim soluta aliquid <br/> nobis ipsum pariatur doloribus!</span>
                <a href="">
                <button className="button s-button">Registrate</button>
                </a>
                <div className="blur s-blurl" style={{ background: "#ABF1FF94"}}></div>
            </div>
            {/* Lado Derecho */}
            <div className="Cards">
                <div style={{left: '14rem'}}>
                    <Card
                    // emoji = {HeartEmoji}
                    heading = {'Texto1'}
                    detail = {"Explicacion dfhddjhdio gjsijssp "}
                    />
                </div>
                {/* Segunda Carta */}
                <div style={{top: "12rem", left: "-4rem"}}>
                    <Card
                    // emoji = {glasses}
                    heading = {"Texto2"}
                    detail = {"Explicacion dfhddjhdio gjsijssp "}
                    />
                </div>
                {/* Tercera Carta */}
                <div style={{top: "19rem", left: "12rem"}}>
                    <Card
                    // emoji = {humble}
                    heading = {"Texto3"}
                    detail = {"Explicacion dfhddjhdio gjsijssp "}
                    />
                </div>
            </div>
            <div className="blur s-blur2" style={{ background: "rgba(238 210 255)"}}></div>
        </div>
    )
}