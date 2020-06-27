import React from 'react';
import './about.scss';
import Taps from './taps/taps';

function About() {
    return (
        <div>
            <div className='aboutWorks'>
                <div className='dataOfAbout'>
                    <h3>How It Works</h3>
                    <p>An overview of how work happens on Upwork.</p>
                    <button className='btn btn-primary'>Get Started</button>
                </div>
            </div>
            <Taps/>
            
        </div>
    )
}

export default About
