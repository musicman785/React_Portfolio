import React from "react";
import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Portfolio</Link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className={window.location.pathname === "/" || window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/contact"
                            className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;