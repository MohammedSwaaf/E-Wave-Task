import React from 'react';
import { Row, Col } from 'reactstrap';
import './footer.scss';
import facebook from '../../assets/social/Path 1864.svg';
import bnehance from '../../assets/social/Path 1869.svg';
import youtube from '../../assets/social/Path 1868.svg';
import insta from '../../assets/social/Path 1867.svg';
import linked from '../../assets/social/Path 1866.svg';
import twitter from '../../assets/social/Path 1865.svg';


function Footer() {
    return (
        <div className='footer'>
            <div className='linksOfFooter'>
                <Row>
                    <Col xs='12' sm='12' md='4' lg='4'>
                        <div>
                            <h2 className='logoFooter'>siteLogo</h2>
                            <div className='tesrms'><span>{'Privacy Policy'+'  '}</span><span style={{padding:'0 10px'}}>|</span><span>{'  '+'Terms of Service'}</span></div>
                            <p className='copyRight'>© {new Date().getFullYear()} company International. All Copyrights Reserved!</p>
                            <div className='socialApps'>
                                <img src={facebook} alt='facebook' />
                                <img src={twitter} alt='twitter' />
                                <img src={linked} alt='linked' />
                                <img src={insta} alt='insta' />
                                <img src={youtube} alt='youtube' />
                                <img src={bnehance} alt='bnehance' />
                            </div>
                        </div>
                    </Col>
                    <Col xs='12' sm='12' md='4' lg='4'>
                        <div>
                            <ul>
                                <li className='Top'>About</li>
                                <li>Privacy Policy</li>
                                <li>Terms of Service</li>    
                                <li>Intellectual Property Claims</li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs='12' sm='12' md='4' lg='4'>
                    <div>
                            <ul>
                                <li className='Top'>Support</li>
                                <li>How it works?</li>
                                <li>Support</li>    
                                <li>Trust & Safety</li>
                                <li>Invite Friends</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default Footer
