import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


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
                    <li className="nav-item">
                        <a className="nav-link active" target="_blank" rel="noopener noreferrer" href="https://github.com/musicman785"><FontAwesomeIcon icon={faGithub} /></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/chris-salgado/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;