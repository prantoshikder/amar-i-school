import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import BackgroundPart from '../BackgroundPart/BackgroundPart';
import Feature from '../Feature/Feature';
import Service from '../Service/Service';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <BackgroundPart></BackgroundPart>
            <About></About>
            <Service></Service>
            <Feature></Feature>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;