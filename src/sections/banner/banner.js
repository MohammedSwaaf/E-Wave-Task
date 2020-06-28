import React from 'react';
import './banner.scss';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Row, Col, Spinner } from 'reactstrap';
import { Link } from 'react-router-dom';
import play from '../../assets/Group 1767.svg';
import person from '../../assets/photo.png';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'

function Banner() {
    const [loader, setLoader] = React.useState(false)
    const btnClicked = () => {
        setLoader(true);
        setTimeout(() => {
            
            Swal.fire({
                icon: 'warning',
                title: 'Greeting,',
                text: `I hope to give me your feedback if I'm not accepted `,
                showConfirmButton: false,
                timer: 5000
            })
            setLoader(false);
        }, 2000)
        
    }
    return (
        <>
            <div className='banner'>
                <Row style={{ height: '100%' }}>
                    <Col xs='12' sm='12' md='5' className='colOfBannerData' style={{ margin: 'auto'}}>
                        <div className='bannerData'>
                            <h3 className='bannerHead'>First Title, 2nd Title</h3>
                            <h6 className='subBannerHead'>But I must explain to you how all this mistaken idea of denouncing pleasure.</h6>

                            <Link to='#' className='link'> <img src={play} alt='Play' />Watch Demo</Link>
                            <button className='btn btn-primary' onClick={btnClicked}>{loader=== false ?'Get Started': <Spinner color="light" /> }</button>
                        </div>
                    </Col>
                    <Col xs='12' sm='12' md='7' className='colOfBannerImg' style={{ background: '' }} >
                        <div className='person'>

                            <img className="personImage" src={person} alt='person' />

                            <div className="half-circle"></div>
                            <div className='dataOfParseon'>
                                <Box component="fieldset" mb={3} borderColor="transparent">
                                    <Rating
                                        name="customized-empty"
                                        defaultValue={4.5}
                                        precision={0.5}
                                        emptyIcon={<StarBorderIcon fontSize="inherit" />}
                                        readOnly
                                    />
                                </Box>
                                <span className='name'>Nadeen Aly</span><br />
                                <span className='title'>Job title</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Banner
