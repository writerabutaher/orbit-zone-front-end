import React from 'react';
import Categories from './Categories';
import Advertise from './Advertise'
import Feature from './Feature';
import Hero from './Hero';
import Sponsors from './Sponsors';
import Pricing from './Pricing';
import CallToAction from './CallToAction';
import Explore from './Explore';

const Home = () => {
    return (
        <>
            <Hero></Hero>
            <Categories></Categories>
            <Explore />
            <Advertise />
            <Pricing />
            <Feature></Feature>
            <CallToAction />
            <Sponsors></Sponsors>
        </>
    );
};

export default Home;