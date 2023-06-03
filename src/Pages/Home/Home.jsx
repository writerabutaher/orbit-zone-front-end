import React from 'react';
import Categories from './Categories';
import Advertise from './Advertise'
import Feature from './Feature';
import Hero from './Hero';
import Sponsors from './Sponsors';
import Pricing from './Pricing';

const Home = () => {
    return (
        <>
            <Hero></Hero>
            <Categories></Categories>
            <Advertise />
            <Pricing />
            <Feature></Feature>
            <Sponsors></Sponsors>
        </>
    );
};

export default Home;