import React from 'react';
import Nav from '../layout/navigation/nav';
import Banner from '../sections/banner/banner';
import Business from '../sections/business/business';
function Home() {
    return (
        <div>
            <Nav/>
            <Banner/>
            <Business />
        </div>
    )
}

export default Home
