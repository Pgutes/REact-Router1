import { Link } from "react-router-dom";
import React from "react";
import logo from "../assets/img/logo.png";
import "../assets/css/Nav.css";

const Nav = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" >Contacto</Link>
                        </li>
                    </ul>
                    <div className="img-logo">
                    <Link className="nav-link active" aria-current="page" to="/">
                        <img src={logo} alt="" />
                        <a className="navbar-brand" href="#">Happy Cake</a>
                    </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;