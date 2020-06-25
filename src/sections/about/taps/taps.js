import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Hiring from '../../../assets/Group 1719.svg';
import Working from '../../../assets/Group 1788.svg';
import './taps.scss';
import FullWidthTabs from './FQTaps/subTaps';

function Taps  (props) {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div className='tapsOfAbout'>
      <Nav className='tabs' tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            If you're hiring 
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            If you're working
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            FAQs
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
      <TabPane tabId="1">
          <Row>
            <Col sm="12" md='12' lg='6' xl='6'>
              <Card body>
                <CardTitle style={{
                    fontFamily:'Roboto',fontSize:'35px',fontWeight:'bold',color:'#555',padding: '0px 0 20px 0'
                }}>Easily find quality matches</CardTitle>
                <CardText style={{
                    fontSize:'16px',fontWeight:'lighter',color:'#555'
                }}>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings .</CardText>
                <ul>
                    <li><b>But I must explain to you.</b> Tell us about your project and the specific skills required. Learn how.</li>
                    <li><b>But I must explain to you how.</b> But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account.</li>
                    <li><b>We send you a shortlist of likely candidates.</b> But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account .</li>
                </ul>
              </Card>
            </Col>
            <Col sm="12" md='12' lg='6' xl='6' >
              <Card body>
                <img style={{margin:'120px 0'}} src={Hiring} alt='Hiring' />
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12" md='12' lg='6' xl='6'>
              <Card body>
                <CardTitle style={{
                    fontFamily:'Roboto',fontSize:'35px',fontWeight:'bold',color:'#555',padding: '0px 0 20px 0'
                }}>But I must, explain to you how</CardTitle>
                <CardText style={{
                    fontSize:'16px',fontWeight:'lighter',color:'#555'
                }}>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings .</CardText>
                <ul>
                    <li><b>But I must explain to you.</b> Tell us about your project and the specific skills required. Learn how.</li>
                    <li><b>But I must explain to you how.</b> But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account.</li>
                    <li><b>We send you a shortlist of likely candidates.</b> But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account .</li>
                </ul>
              </Card>
            </Col>
            <Col sm="12" md='12' lg='6' xl='6' >
              <Card body>
                <img style={{margin:'120px 0'}} src={Working} alt='Working' />
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12" style={{justifyContent:'center',display:'flex'}}>
              <FullWidthTabs/>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}
export default Taps;