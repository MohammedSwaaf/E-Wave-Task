import React, { useState } from 'react';
import './about.scss';
import Taps from './taps/taps';
import play from '../../assets/Group 1767.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
function About() {
    const [btn, setbtn] = useState('Get Started');

    const buttonHiring = () => {
        setbtn('Get Started')
    }
    const buttonWorking = () => {
        setbtn('Bid on Projects')
    }
    const buttonFAQ = () => {
        setbtn('Watch a video')
    }
    const img = <img src={play} alt='play' />;
    console.log(img.props.src);
    if (btn === 'Watch a video') {
        console.log(btn);
    }

    return (
        <>
            <div className='aboutWorks'>
                <div className='dataOfAbout'>
                    <h3>How It Works</h3>
                    <p>An overview of how work happens on Upwork.</p>
                    <button className='btn btn-primary'>{btn === 'Watch a video' ? <span><FontAwesomeIcon icon={faPlay} style={{ color: '#fff',padding:'0 3px',margin:'-1px 5px',border:'1px solid #fff',borderRadius:'50%' }} />Watch a video</span>  : btn}</button>
                </div>
            </div>
            <Taps
                triggerButtonHiring={buttonHiring}
                triggerButtonWorking={buttonWorking}
                triggerButtonFAQ={buttonFAQ} />

        </>
    )
}

export default About
