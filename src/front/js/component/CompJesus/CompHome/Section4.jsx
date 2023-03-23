import React from "react";
import "../../../../styles/section4.css";
import chevrolet from "../../../../img/chevrolet.png";
import ford from "../../../../img/ford.png";
import mitsubishi from "../../../../img/mitsubishi.png";
import toyot from "../../../../img/toyot.png";
import honda from "../../../../img/honda.png";

export const Section4 = () => {
  return (
    <div className="section4">
      {/* Left Side */}
      <div className="awesome">
        <span>Nuestras Mercas</span>
        <span>Más Vendidas</span>
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          <br /> Nostrum eos ullam rerum accusantium labore tenetur ex iusto,
          <br /> suscipit quaerat eaque eum commodi deleniti enim soluta aliquid{" "}
          <br /> nobis ipsum pariatur doloribus!
        </span>
        <button className="button s-button">Catálogo</button>
        <div className="blur s-blurl" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* Right Side */}
      <div className="w-right">
        <div className="mainCircle">
          <div className="w-secCircle">
            <img src={chevrolet} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={honda} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={toyot} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={ford} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={mitsubishi} alt="" />
          </div>
        </div>
        {/* Bakcground circles */}
        <div className="w-backCircle blueCircle">

        </div>
        <div className="w-backCircle yellowCircle">

        </div>
      </div>
    </div>
  );
};
