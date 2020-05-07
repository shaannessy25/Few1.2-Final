import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './About.css';



class About extends Component {
    render() {
        return (
            <div>
                <Image src='images/about.jpg' className="header-image" fluid />
                <Container>
                    
                    <Jumbotron>
                        <h2>About Me</h2>
                        <p>The official site of Shaannessy</p>
                        <Link to='/'>
                            <Button variant="primary">Home</Button>
                        </Link>
                    </Jumbotron>
                </Container>
            </div>
        )
    }

}



export default About;