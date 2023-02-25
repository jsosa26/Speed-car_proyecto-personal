import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import instagram from "../../img/instagram.png";
import facebook from "../../img/facebook.png";
import github from "../../img/silueta-del-logo-de-github-en-un-cuadrado.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import glasses from "../../img/glasses.png";
import crown from "../../img/crown.png";
import { Section2 } from "../component/CompJesus/CompHome/Section2.jsx"

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
    //Section 1
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Speed Test</span>
          <span>
            Somos una compañia con crecimiento exponencial en el mercado
            Automotriz, ofreciendo las mejores cuotas a nuestros clientes, y
            maxima seguridad a sus compradores
          </span>
        </div>
        <button className="button i-button">Catálogo</button>
        <div className="i-icon">
          <a href="#">
            <img src={instagram}></img>
          </a>
          <a href="#">
            <img src={facebook}></img>
          </a>
          <a href="#">
            <img src={github}></img>
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1}></img>
        <img src={Vector2}></img>
        <img src={Boy}></img>
        <img src={glasses}></img>
        <div className="i-img1" style={{ top: "-6%", left: "66%" }}>
          <img src={crown}></img>
          <span>
            Super <br />
            Cuotas
          </span>
        </div>
        <div className="i-img1" style={{ top: "23.1rem", left: "0rem" }}>
          <img src={thumbup}></img>
          <span>
            calidad <br /> garantizada
          </span>
        </div>
        <div className="blur" style={{background: "rgba(238 210 255)"}}></div>
        <div className="blur" style={{background: '#C1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '-9rem'}}></div>
      </div>
    </div>
    <Section2 />
    </>
  );
};
