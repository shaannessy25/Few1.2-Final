import React, { Component } from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import './CustomNavbar.css';

class CustomNavbar extends Component {
    render() {
        return (
            <div>
              
                <Navbar className="Navbar" bg="dark" variant="dark">
                
                <Container fluid='md'>
                    <Navbar.Brand href="#home">Shaannessy</Navbar.Brand>
                    <Button variant="outline-danger" size="xxl" href="/">Merchandise</Button>
                    <Button variant="outline-danger" size="xxl" href="/new">Music</Button>
                    <Button variant="outline-danger" size="xxl" href="/about">Tour Dates</Button>
                    <Button variant="outline-danger" size="xxl" href="/about">About Me</Button>
                </Container>
            </Navbar>
            </div>
     
        )

    }
}


export default CustomNavbar;