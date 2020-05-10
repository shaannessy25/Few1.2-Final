import React, { Component } from 'react';
import { Navbar, Container, NavLink } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';
import './CustomNavbar.css';

class CustomNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar className="Navbar" bg="dark" variant="dark">
                <Container fluid='md'>
                    <Navbar.Brand className="brand" href="/">Shaannessy</Navbar.Brand>
                    <NavLink className="navlink" href="/merch">Merchandise</NavLink>
                    <NavLink className="navlink" href="/new">Music</NavLink>
                    <NavLink className="navlink" href="/tour">Tour Dates</NavLink>
                    <NavLink className="navlink" href="/about">About</NavLink>
                </Container>
                </Navbar>
            </div>
     
        )

    }
}


export default CustomNavbar;