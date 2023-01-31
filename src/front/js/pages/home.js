import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

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
		<button className="button i-button">Nuestro Catalogo</button>
      </div>
      <div className="i-right"> jggnjsgnsglsdgh</div>
    </div>
  );
};
