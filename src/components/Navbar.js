import React from 'react';
import logo from '../images/logo.png'

const Navbar = () => {
    return (

        <nav className="navbar navbar-dark bg-primary box-shadow mb-5">
            <div className="container">
                <div className="navbar-brand">
                    <img
                        src={logo}
                        width="45" height="45"
                        className="d-inline-block align-top inverted mt-1"
                        alt="logo"
                    />
                    <span className="navbarTitle ml-2">AirTab</span>
                </div>
            </div>
        </nav>






    );
}

export default Navbar;