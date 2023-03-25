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
            <div class="card">
                <img src="..." class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div class="card" aria-hidden="true">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title placeholder-glow">
                    <span class="placeholder col-6"></span>
                    </h5>
                    <p class="card-text placeholder-glow">
                        <span class="placeholder col-7"></span>
                        <span class="placeholder col-4"></span>
                        <span class="placeholder col-4"></span>
                        <span class="placeholder col-6"></span>
                        <span class="placeholder col-8"></span>
                    </p>
                    <a class="btn btn-primary disabled placeholder col-6"></a>
                </div>
            </div>
        </div>
    );
};