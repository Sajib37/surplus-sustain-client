import React from 'react';
import Slider from './Slider';
import FeatureFood from './FeatureFood';
import { Helmet } from 'react-helmet';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div className=' bg-gray-100'>
            <Helmet>
                <title>Surplus Sustain || Home</title>
            </Helmet>
            <Slider></Slider>
            <FeatureFood></FeatureFood>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;