import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-part">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-4">
                                <ul>
                                    <li>ISchool for recruiting</li>
                                    <li>Teach on ischool</li>
                                    <li>Get the app</li>
                                    <li>About us</li>
                                    <li>Contact us</li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul>
                                    <li>Careers</li>
                                    <li>Blog</li>
                                    <li>Help and Support</li>
                                    <li>Affiliate</li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul>
                                    <li>Terms</li>
                                    <li>Privacy policy and cookie policy</li>
                                    <li>Sitemap</li>
                                    <li>Featured courses</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="social-part">
                            <div className="social-heading">
                                <h4>One's Employment, <br /><span>Our Fame</span></h4>
                            </div>
                            <div className="social-link">
                                <ul className="d-flex ml-auto">
                                    <li><a href="#"><FontAwesomeIcon className="icon" icon={faFacebookF} /></a></li>
                                    <li><a href="#"><FontAwesomeIcon className="icon" icon={faTwitter} /></a></li>
                                    <li><a href="#"><FontAwesomeIcon className="icon" icon={faWhatsapp} /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom text-center">
                <p>www.amariSchool.com</p>
            </div>
        </div>
    );
};

export default Footer;