import React from 'react';
import './Navbar.css';
import logo from '../../../Image/logo.png';
import top_icon1 from '../../../Image/top-icon1.png';
import top_icon2 from '../../../Image/top-icon2.png';
import top_icon3 from '../../../Image/top-icon3.png';


const Navbar = () => {
    return (
        <div className="navbar-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src={logo} className="" height="45px" alt="" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Courses</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                        <div className="header-top-icon">
                            <ul className="d-flex">
                                <li><a href="#"><img src={top_icon1} height="30px" alt="" /></a></li>
                                <li><a href="#"><img src={top_icon2} height="20px" alt="" /></a></li>
                                <li><a href="#"><img src={top_icon3} height="18px" alt="" /></a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;