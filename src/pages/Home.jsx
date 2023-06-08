import React from 'react';
import logo from "../assets/img/logo.png";
import "../assets/css/Home.css";

const Home = () => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center">
                <div className="col-6 text-center">
                    <h1>Bienvenido a Happy Cake</h1>
                    <p className="lead">El lugar de los pasteles felices</p>
                    <div className='img-home'>
                        <img src={logo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;