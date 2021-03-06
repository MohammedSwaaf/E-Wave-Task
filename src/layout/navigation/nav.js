import React, { Component } from 'react';
import {
    Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import './nav.scss';
import GoogleFontLoader from 'react-google-font-loader';


class Navigation extends Component {
    state = {
        isOpen: false,

    }

    toggle = () => this.setState({ isOpen: !this.state.isOpen });

    render() {
        return (
            <div>
                <GoogleFontLoader
                    fonts={[
                        {
                            font: 'Roboto',
                            weights: [400, '400i'],
                        },
                        {
                            font: 'Roboto Mono',
                            weights: [400, 700],
                        },
                    ]}
                    subsets={['cyrillic-ext', 'greek']}
                />
                <Navbar color='light' style={{ fontFamily: 'Roboto' }} className="nav navbar-expand-sm" toggleable='true' expand="md">
                    <Container>
                        <NavbarBrand className='logo' to="/"><span className='leftLogo'>siteLogo</span> <span className='rightLogo'>How it works?</span></NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>

                            <Nav className='ml-auto' navbar>

                                <NavItem>
                                    <NavLink className='nav-item' activeClassName="active" exact tag={RRNavLink} to='/'>Function</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink style={{ color: '#555555' }} tag={RRNavLink} to='#'>Sign in</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink style={{ color: '#555555' }} tag={RRNavLink} to='#'>Join</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className='postProject btn' tag={RRNavLink} to='#'>Post a project</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;