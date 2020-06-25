import React, { Component } from "react";
import Slider from "react-slick";
import './slider.scss';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Row, Col
} from 'reactstrap';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

import build from '../../assets/building.png';
import hotel from '../../assets/2.png';
import bool from '../../assets/bool.png';
import garden from '../../assets/garden.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


class SliderProjects extends Component {
    render() {
        var settings = {
            //   dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            draggable: false,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        // initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 300,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className='slider'>
                <h2 className="HeadOfSlider"> Get Inspired With Projects Done on Site </h2>
                <Slider {...settings}>
                    <div>
                        <Card>
                            <CardImg top width="100%" src={build} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>This is a Project title</CardTitle>
                                <CardSubtitle>
                                    <div>
                                        <span className='leftSide'>in Design</span>
                                        <span className='leftSide' style={{ float: 'right' }}><FontAwesomeIcon icon={faStar} style={{ color: '#FFBF00' }} /><span style={{ color: '#FFBF00', margin: '0 5px' }}>4.7</span>(1K+)</span>
                                    </div>

                                </CardSubtitle>
                                <CardText style={{ marginTop: '15px',marginBottom: '-40px' }}>
                                    <Row>
                                        <Col sm='12' md='12'>
                                            <img src={bool} width='43' height='43' style={{ borderRadius: '50%',margin:'0 0 0 -12px' }} alt='person' />

                                            <div style={{ marginTop: '-5px' }}>

                                                <div style={{ padding: '0 40px', position: 'relative', bottom: '40px' }}> <span style={{ fontSize: '13px', fontWeight: '600', float: 'left', marginRight: '5px' }}>Fatma Adel
                                                </span>

                                                    <Box component="fieldset" mb={3} borderColor="transparent">
                                                        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly size="small" />
                                                    </Box>
                                                    <p style={{ fontSize: '11px', fontFamily: 'roboto', color: '#8A8A8A' }}>Job titel</p>

                                                </div>

                                            </div>
                                        </Col>
                                    </Row>
                                </CardText>

                            </CardBody>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <CardImg top width="100%" src={hotel} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>This is a Project title</CardTitle>
                                <CardSubtitle>
                                    <div>
                                        <span className='leftSide'>in Design</span>
                                        <span className='leftSide' style={{ float: 'right' }}><FontAwesomeIcon icon={faStar} style={{ color: '#FFBF00' }} /><span style={{ color: '#FFBF00', margin: '0 5px' }}>4.2</span>(8K+)</span>
                                    </div>
                                </CardSubtitle>
                                <CardText style={{ marginTop: '15px',marginBottom: '-40px' }}>
                                    <Row>

                                     <Col sm='12' md='12'>
                                            <img src={bool} width='43' height='43' style={{ borderRadius: '50%',margin:'0 0 0 -12px' }} alt='person' />

                                            <div style={{ marginTop: '-5px' }}>

                                                <div style={{ padding: '0 40px', position: 'relative', bottom: '40px' }}> <span style={{ fontSize: '13px', fontWeight: '600', float: 'left', marginRight: '5px' }}>Hossam Khaled
                                                </span>

                                                    <Box component="fieldset" mb={3} borderColor="transparent">
                                                        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly size="small" />
                                                    </Box>
                                                    <p style={{ fontSize: '11px', fontFamily: 'roboto', color: '#8A8A8A' }}>Job titel</p>

                                                </div>

                                            </div>
                                        </Col>
                                    </Row>
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <CardImg top width="100%" src={bool} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>This is a Project title</CardTitle>
                                <CardSubtitle>
                                    <div>
                                        <span className='leftSide'>in Design</span>
                                        <span className='leftSide' style={{ float: 'right' }}><FontAwesomeIcon icon={faStar} style={{ color: '#FFBF00' }} /><span style={{ color: '#FFBF00', margin: '0 5px' }}>4.7</span>(1K+)</span>
                                    </div>
                                </CardSubtitle>
                                <CardText style={{ marginTop: '15px',marginBottom: '-40px' }}>
                                    <Row>
                                       
                                     <Col sm='12' md='12'>
                                            <img src={bool} width='43' height='43' style={{ borderRadius: '50%',margin:'0 0 0 -12px' }} alt='person' />

                                            <div style={{ marginTop: '-5px' }}>

                                                <div style={{ padding: '0 40px', position: 'relative', bottom: '40px' }}> <span style={{ fontSize: '13px', fontWeight: '600', float: 'left', marginRight: '5px' }}>Heba
                                                </span>

                                                    <Box component="fieldset" mb={3} borderColor="transparent">
                                                        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly size="small" />
                                                    </Box>
                                                    <p style={{ fontSize: '11px', fontFamily: 'roboto', color: '#8A8A8A' }}>Job titel</p>

                                                </div>

                                            </div>
                                        </Col>
                                    </Row>
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <CardImg top width="100%" src={garden} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>This is a Project title</CardTitle>
                                <CardSubtitle>
                                    <div>
                                        <span className='leftSide'>in Design</span>
                                        <span className='leftSide' style={{ float: 'right' }}><FontAwesomeIcon icon={faStar} style={{ color: '#FFBF00' }} /><span style={{ color: '#FFBF00', margin: '0 5px' }}>4.1</span>(513)</span>
                                    </div>
                                </CardSubtitle>
                                <CardText style={{ marginTop: '15px',marginBottom: '-40px' }}>
                                    <Row>
                                        
                                     <Col sm='12' md='12'>
                                            <img src={bool} width='43' height='43' style={{ borderRadius: '50%',margin:'0 0 0 -12px' }} alt='person' />

                                            <div style={{ marginTop: '-5px' }}>

                                                <div style={{ padding: '0 40px', position: 'relative', bottom: '40px' }}> <span style={{ 
                                                    fontSize: '12px',
                                                    fontWeight: '500',
                                                    float: 'left',
                                                    marginRight: '2px',
                                                }}>Mahmoud Mostafa
                                                </span>

                                                    <Box component="fieldset" mb={3} borderColor="transparent">
                                                        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly size="small" />
                                                    </Box>
                                                    <p style={{ fontSize: '11px', fontFamily: 'roboto', color: '#8A8A8A' }}>Job titel</p>

                                                </div>

                                            </div>
                                        </Col>
                                    </Row>
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <CardImg top width="100%" src={build} alt="Card image cap" />
                            <CardBody>
                                <CardTitle style={{ fontSize: '15px' }}>This is a Project title</CardTitle>
                                <CardSubtitle>
                                    <div>
                                        <span className='leftSide'>in Design</span>
                                        <span style={{ float: 'right', position: 'relative', top: '5px' }}><FontAwesomeIcon icon={faStar} style={{ color: '#FFBF00' }} /><span style={{ color: '#FFBF00', margin: '0 5px' }}>4.7</span><span style={{ color: '#8A8A8A'}}>(1k+)</span></span>
                                    </div>
                                </CardSubtitle>
                                <CardText style={{ marginTop: '15px',marginBottom: '-40px' }}>
                                    <Row>
                                  
                                    <Col sm='12' md='12'>
                                            <img src={bool} width='43' height='43' style={{ borderRadius: '50%',margin:'0 0 0 -12px' }} alt='person' />

                                            <div style={{ marginTop: '-5px' }}>

                                                <div style={{ padding: '0 40px', position: 'relative', bottom: '40px' }}> <span style={{ fontSize: '13px', fontWeight: '600', float: 'left', marginRight: '5px' ,color:'#8A8A8A' }}>Fatma Adel
                                                </span>

                                                    <Box component="fieldset" mb={3} borderColor="transparent">
                                                        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly size="small" />
                                                    </Box>
                                                    <p style={{ fontSize: '11px', fontFamily: 'roboto' }}>Job titel</p>

                                                </div>

                                            </div>
                                        </Col>
                                    </Row>
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <CardImg top width="100%" src={hotel} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>This is a Project title</CardTitle>
                                <CardSubtitle>
                                    <div>
                                        <span className='leftSide'>in Design</span>
                                        <span className='leftSide' style={{ float: 'right' }}><FontAwesomeIcon icon={faStar} style={{ color: '#FFBF00' }} /><span style={{ color: '#FFBF00', margin: '0 5px' }}>4.2</span>(8K+)</span>
                                    </div>
                                </CardSubtitle>
                                <CardText style={{ marginTop: '15px',marginBottom: '-40px' }}>
                                    <Row>
                                      
                                     <Col sm='12' md='12'>
                                            <img src={bool} width='43' height='43' style={{ borderRadius: '50%',margin:'0 0 0 -12px' }} alt='person' />

                                            <div style={{ marginTop: '-5px' }}>

                                                <div style={{ padding: '0 40px', position: 'relative', bottom: '40px' }}> <span style={{ fontSize: '13px', fontWeight: '600', float: 'left', marginRight: '5px' }}>Heba
                                                </span>

                                                    <Box component="fieldset" mb={3} borderColor="transparent">
                                                        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly size="small" />
                                                    </Box>
                                                    <p style={{ fontSize: '11px', fontFamily: 'roboto', color: '#8A8A8A' }}>Job titel</p>

                                                </div>

                                            </div>
                                        </Col>
                                    </Row>
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>

                </Slider>
            </div>
        );
    }
}
export default SliderProjects