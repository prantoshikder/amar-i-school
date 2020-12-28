import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import './BackgroundPart.css'

const BackgroundPart = () => {
    return (
        <div className="background-part">
            <div className="bg-overlay">
                <Navbar></Navbar>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="bg-content">
                                <h2 className="text-white">"Try not to become a <br />man of success. Rather <br />become a man of value."</h2>
                                <p className="text-white">- Albert Einstein</p>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BackgroundPart;