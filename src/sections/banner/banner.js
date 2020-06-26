import React from 'react';
import './banner.scss';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import play from '../../assets/Group 1767.svg';
import person from '../../assets/photo.png'

function Banner() {
    return (
        <div className='banner'>
            <Row style={{ height: '100%' }}>
                <Col xs='12' sm='12' md='5' className='colOfBannerData' style={{ margin: 'auto', padding: '0 0 0 139px' }}>
                    <div className='bannerData'>
                        <h3 className='bannerHead'>First Title, 2nd Title</h3>
                        <h6 className='subBannerHead'>But I must explain to you how all this mistaken idea of denouncing pleasure.</h6>
                        
                        <Link className='link'> <img src={play} alt='Play' />Watch Demo</Link>
                        <button className='btn btn-primary'>Get Started</button>
                    </div>
                </Col>
                <Col xs='12' sm='12' md='7' className='colOfBannerImg' style={{ background: '' }} >
                    {/* <h2>Pic</h2> */}
                    <div className='person'>
                        {/* <div className="half-circle"></div> */}

                        <img className="personImage" src={person} alt='person' />

                        <div className="half-circle"></div>
                        <div className='dataOfParseon'>
                            <Box component="fieldset" mb={3} borderColor="transparent">
                                <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                            </Box>
                            <span className='name'>Nadeen Aly</span><br />
                            <span className='title'>Job title</span>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Banner
