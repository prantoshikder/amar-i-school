import React from 'react';
import './Service.css';
import service from '../../../Image/service-img.png'

const Service = () => {
    return (
        <div className="service-part">
            <div className="container">
                <div className="service-heading text-center">
                    <h2>Why Choose us</h2>
                </div>
                <div className="service-item">
                    <div className="service-image text-center">
                        <img src={service} className="w-75" height="400px" alt="" />
                    </div>
                    <div className="service-content">
                        <div className="row">
                            <div className="col-md-4 text-center">
                                <div className="service-items">
                                    <h1 className="text-center">1058+</h1>
                                    <p className="text-center">Learners</p>
                                </div>
                            </div>
                            <div className="col-md-4 text-center">
                                <div className="service-items">
                                    <h1 className="text-center">50+</h1>
                                    <p className="text-center">Courses</p>
                                </div>
                            </div>
                            <div className="col-md-4 text-center">
                                <div className="service-items">
                                    <h1 className="text-center">13+</h1>
                                    <p className="text-center">Projects</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;