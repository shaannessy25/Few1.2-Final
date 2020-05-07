import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button, Carousel } from 'react-bootstrap';
import './New.css';



class New extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="images/whattheyneed.jpg"
                            alt="First slide"
                            fluid
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="/images/King.jpg"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="/images/HEARTEATER.jpg"
                            alt="Third slide"
                            />
                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="/images/thebay.jpg"
                            alt="Third slide"
                            />
                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="/images/whattheywant.jpg"
                            alt="Third slide"
                            />
                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Container>  
            {/* <Container>
                <Row>
                    <Col>
                        <Image src="/images/thebay.jpg" fluid/>
                    </Col>
                    <Col>
                        <Image src="/images/King.jpg" fluid />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Image src="/images/HEARTEATER.jpg" fluid />
                    </Col>
                    <Col>
                        <Image src="/images/whattheyneed.jpg" fluid />
                    </Col>
                </Row>
          </Container> */}
          </div>
        )
    }

}



export default New;