import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './About.css';



class About extends Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h2>About Me</h2>
                    <p>The official site of Shaannessy</p>
                </Jumbotron>
                <Link to='/'>
                <Button variant="secondary">Home</Button>
                </Link>
            </Container>
        )
    }

}



export default About;