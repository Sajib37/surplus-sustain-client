import React from 'react';
import Slider from './Slider';
import FeatureFood from './FeatureFood';
import { Helmet } from 'react-helmet';
import Testimonials from './Testimonials/Testimonials';
import HowitWork from './HowitWork';

const Home = () => {
    return (
        <div className=' bg-gray-100'>
            <Helmet>
                <title>Surplus Sustain || Home</title>
            </Helmet>
            <Slider></Slider>
            <FeatureFood></FeatureFood>
            <Testimonials></Testimonials>
            <HowitWork></HowitWork>
        </div>
    );
};

export default Home;