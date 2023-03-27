import React from "react";
import "../../../../styles/section6.css";
import hombre1 from "../../../../img/img_ts1.jpg";
import hombre2 from "../../../../img/img_ts2.jpg";
import hombre3 from "../../../../img/img_ts3.jpg";

export const Section6 = () => {
    return (
        <div className="t-wrapper">
            <div className="t-heading">
                <span>Contamos con una larga trayectoria</span>
                <span>y más de 50 vehiculos vendidos</span>
                <span>por todo el pais</span>
                <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
                <div className="blur t-blur2" style={{ background: "skyblue"}}></div>
            </div>
            {/* slider */}
            <div class="testimonials">
                <img src={hombre1} class="ts-img-top" className="foto_card"></img>
            
                <div class="ts-body">
                    <h5 class="ts-title">Antonio Cardozo</h5>
                    <p class="ts-text">Super recomendado, una excelente pagina, con excelentes precios</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div class="testimonials">
                <img src={hombre2} class="ts-img-top" className="foto_card"></img>
            
                <div class="ts-body">
                    <h5 class="ts-title">Sebastian Dominguez</h5>
                    <p class="ts-text">Desde el primer segundo me senti confiado para comprar mi primer vehiculo</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div class="testimonials">
                <img src={hombre3} class="ts-img-top" className="foto_card"></img>
            
                <div class="ts-body">
                    <h5 class="ts-title">Fernando Garcia</h5>
                    <p class="ts-text">impresionante, gracias infinitas por ayudarme al comprar mi vehiculo</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};