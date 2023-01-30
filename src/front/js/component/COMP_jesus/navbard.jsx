import React from "react"

const Navbar = () => {

    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">City Locator</div>
                <span>Boton</span>
            </div>
            <div className="n-rigth">
                <div className="n-list">
                    <ul>
                        <li>home</li>
                        <li>Catálogo</li>
                        <li>Testimoniales</li>
                    </ul>
                </div>
                <button className="button">Contáctanos</button>
            </div>
        </div>
    )
}



export default Navbar



