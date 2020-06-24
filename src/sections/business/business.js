import React from 'react';
import './business.scss';
import { Row, Col } from 'reactstrap';
import Work from '../../assets/work.svg';
import BtnVid from '../../assets/Group 1692.svg';
import Security from '../../assets/security.svg';
import Hours from '../../assets/24-hours.svg';



function Business() {
    return (
        <div className='business'>
            <Row>
                <Col md='5' style={{ margin: 'auto', padding: ' 0px 0px 0px 139px' }}>
                    <div className='businessVideo'>
                        <img className='btnVideo' src={BtnVid} alt='btn' />
                        <img className='picIm' src={Work} alt='yes' />
                    </div>
                </Col>
                <Col md='7' style={{ padding: '53px' }}>
                    <h4 className='headOfBusiness'>Get Work Done & Grow Your Business Faster On Website</h4>
                    <div className='dataOfBuisness'>
                        <span className='subHead'><img className='picOfSubHead' src={Work} alt='work' />Hire The Best With Trust</span>
                        <p className='descriptionOfHead'>Post your job to get proposals, evaluate freelancers and agencies profiles, reviews delivered projects</p>
                    </div>
                    <div className='dataOfBuisness'>
                        <span className='subHead'><img className='picOfSubHead' src={Security} alt='work' />Protected Payment</span>
                        <p className='descriptionOfHead'>Only pay for the work you like. Your payment is only released when you are pleased and approve the work</p>
                    </div>
                    <div className='dataOfBuisness'>
                        <span className='subHead'><img className='picOfSubHead' src={Hours} alt='work' />We are always here, 24/7</span>
                        <p className='descriptionOfHead'>At any time we are just a click away to help, support, or resolve any issue.</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Business
