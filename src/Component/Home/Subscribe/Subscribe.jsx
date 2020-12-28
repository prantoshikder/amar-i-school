import React from 'react';
import './Subscribe.css'

const Subscribe = () => {
    return (
        <div className="subscribe-part">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="sub-left">
                            <div className="sub-content">
                                <h3>Subscribe for newsletter</h3>
                                <p>Subscribe to our newsletter and we will <br/>bring you the latest news.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="sub-right mt-4">
                            <div className="sub-email d-flex">
                                <input type="text" placeholder="Enter your email address" className="form-control" autocomplete="off"/>
                                <button className="sub-btn btn text-uppercase font-weight-bold">subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;