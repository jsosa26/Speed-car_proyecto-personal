import React from "react"
import "../COMP_jesus/Navbar.css"

export const Navbar = () => {

    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Speed Car</div>
                <span>Boton</span>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType: 'none'}}>
                        <li>home</li>
                        <li>Catálogo</li>
                        <li>Testimoniales</li>
                    </ul>
                </div>
                <button className="button n-button">Login</button>
            </div>
        </div>
    )
}



export default Navbar



