import React from "react";
import "../../../../styles/section6.css";

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
                <img src="../../../../img/img_ts1" class="ts-img-top"></img>
            
                <div class="ts-body">
                    <h5 class="ts-title">Card title</h5>
                    <p class="ts-text">holis the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div class="testimonials">
                <img src="..." class="ts-img-top" alt="..."></img>
            
                <div class="ts-body">
                    <h5 class="ts-title">Card title</h5>
                    <p class="ts-text">holis the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div class="testimonials">
                <img src="..." class="ts-img-top" alt="..."></img>
            
                <div class="ts-body">
                    <h5 class="ts-title">Card title</h5>
                    <p class="ts-text">holis the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};