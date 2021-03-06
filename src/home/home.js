import React from 'react';
import Nav from '../layout/navigation/nav';
import Banner from '../sections/banner/banner';
import Business from '../sections/business/business';
import SliderProjects from '../sections/slider/slider';
import Joining from '../sections/Joining/join';
import About from '../sections/about/about';
import Footer from '../layout/footer/footer';
function Home() {
    return (
        <div>
            <Nav />
            <Banner />
            <Business />
            <SliderProjects />
            <About />
            <Joining />
            <Footer />
        </div>
    )
}

export default Home
