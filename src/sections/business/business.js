import React from 'react';
import './business.scss';
import { Row, Col } from 'reactstrap';
import Work from '../../assets/work.svg';
import BtnVid from '../../assets/2xx.png';
import Security from '../../assets/security.svg';
import Hours from '../../assets/24-hours.svg';
import { Player,BigPlayButton } from 'video-react';



function Business() {
    return (
        <div className='business' style={{ margin: 'auto', padding: ' 60px 139px' }}>
            <Row>
                <Col xs='12' sm='12' md='12' lg='6' style={{ margin: 'auto' }}>
                    <div className='businessVideo'>

                        <Player poster={BtnVid} src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                            <BigPlayButton position="center" />
                        </Player>
                    </div>
                </Col>
                <Col xs='12' sm='12' md='12' lg='6' style={{ padding: '53px' }}>
                    <div>
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
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Business
