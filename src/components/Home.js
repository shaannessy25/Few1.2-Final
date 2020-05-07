import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';



class Home extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row classname="show-grid text-center">
                    <Col sm={8} classname="person-wrapper">
                            <Image src='images/shaan.jpg' />
                        </Col> 
                    </Row>
                    <Jumbotron>
                        <h2>Shaannessy</h2>
                        <p>The official site of Shaannessy</p>
                        <Link to='/about'>
                            <Button varient="primary">About</Button>
                        </Link>
                    </Jumbotron>
                </Container>
            </div>
        )
    }

}



export default Home;