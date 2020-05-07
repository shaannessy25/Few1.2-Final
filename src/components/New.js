import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Carousel, Badge } from 'react-bootstrap';
import './New.css';
import Album from './Album.js'


class New extends Component {
    render() {
        return (
            <div>
                <Container className="container-carousel">
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="images/whattheyneed.jpg"
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="/images/King.jpg"
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="/images/HEARTEATER.jpg"
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="/images/thebay.jpg"
                            alt="=Fourth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="/images/whattheywant.jpg"
                            alt="Fifth slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Container> 
                <Container>
                    <h1>Albums</h1>
                    <Row>
                        <Col>
                            <Album
                                title="HEARTEATER" 
                                image="images/HEARTEATER.jpg"
                                text="this project explores the root of heartbreak"
                            />
                        </Col>
                        <Col>
                            <Album
                                title="What They Need" 
                                image="images/whattheyneed.jpg"
                                text="this project explores the root of heartbreak"
                            />
                        </Col>
                    </Row>
                    <br></br>
                    <h1>Singles</h1>
                    <Row>
                        <Col>
                            <Album
                                title="What They Need" 
                                image="images/king.jpg"
                                text="this project explores the root of heartbreak"
                            />
                        </Col>
                        <Col>
                            <Album
                                title="What They Need" 
                                image="images/thebay.jpg"
                                text="this project explores the root of heartbreak"
                            />
                        </Col>
                    </Row>
                </Container>
              
          </div>
        )
    }

}



export default New;