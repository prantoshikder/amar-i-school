import React from 'react';
import './Feature.css';
import feature_image1 from '../../../Image/feature-img1.png';
import feature_image2 from '../../../Image/feature-img2.png';
import feature_image3 from '../../../Image/feature-img3.png';

const Feature = () => {
    return (
        <div className="feature-part">
            <div className="container">
                <div className="feature-heading text-center">
                    <h2>Our exclusive features</h2>
                </div>
                <div className="feature-item">
                    <div className="row">
                        <div className="col-md-4 mt-5">
                            <div className="feature-items">
                                <div className="feature-icon">
                                    <div className="feature-icon-2">
                                        <img src={feature_image1} height="25px" alt=""/>
                                    </div>
                                </div>
                                <div className="feature-content">
                                    <h4>Full lifetime access</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consectetur qui odio at! Repudiandae, quos!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-5">
                            <div className="feature-items">
                                <div className="feature-icon">
                                    <div className="feature-icon-2">
                                        <img src={feature_image2} height="50px" alt=""/>
                                    </div>
                                </div>
                                <div className="feature-content">
                                    <h4>Full lifetime access</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consectetur qui odio at! Repudiandae, quos!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-5">
                            <div className="feature-items">
                                <div className="feature-icon">
                                    <div className="feature-icon-2">
                                        <img src={feature_image3} height="40px" alt=""/>
                                    </div>
                                </div>
                                <div className="feature-content">
                                    <h4>Full lifetime access</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consectetur qui odio at! Repudiandae, quos!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;