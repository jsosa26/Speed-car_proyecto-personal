import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import instagram from "../../img/instagram.png"
import facebook from "../../img/facebook.png"
import github from "../../img/silueta-del-logo-de-github-en-un-cuadrado.png"
import vector1 from "../../img/vector1.png"
import vector2 from "../../img/vector2.png"
import boy from "../../img/boy.png"
import thumbup from "../../img/thumbup.png"
import glasses from "../../img/glasses.png"
import crown from "../../img/crown.png"

export const Home = () => {
  const { store, actions } = useContext(Context);

return (
	//Section 1
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span >Speed Test</span>
		  <span >Somos una compañia con crecimiento exponencial en el mercado Automotriz, ofreciendo las mejores cuotas a nuestros clientes, y maxima seguridad a sus compradores</span>
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
      <div className="i-right"> jggnjsgnsglsdgh</div>
    </div>
  );
};
