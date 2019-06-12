import React from 'react';
import logo from '../images/logo.png'

const Navbar = () => {
    return (

        <nav className="navbar navbar-dark bg-primary mb-5">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img
                        src={logo}
                        width="35" height="35"
                        className="d-inline-block align-top inverted"
                        alt="logo"
                    />
                    <span className="ml-2">Air quality</span>
                   
                    
            </a>
            </div>
        </nav>

    );
}

export default Navbar;