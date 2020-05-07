import React, { Component } from 'react';
import { Navbar, Container, NavLink } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './CustomNavbar.css';

class CustomNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar className="Navbar" bg="dark" variant="dark">
                <Container fluid='md'>
                
                    <Navbar.Brand className="brand" to="/">Shaannessy</Navbar.Brand>
                    <NavLink to="/">Merchandise</NavLink>
                    <NavLink to="/new">Music</NavLink>
                    <NavLink to="/tour">Tour Dates</NavLink>
                    <NavLink to="/about">About Me</NavLink>
                </Container>
                </Navbar>
            </div>
     
        )

    }
}


export default CustomNavbar;