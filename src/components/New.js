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
                            src={`${process.env.PUBLIC_URL}/images/whattheyneed.jpg`}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={`${process.env.PUBLIC_URL}/images/King.jpg`}
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={`${process.env.PUBLIC_URL}/images/HEARTEATER.jpg`}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={`${process.env.PUBLIC_URL}/images/thebay.jpg`}
                            alt="=Fourth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={`${process.env.PUBLIC_URL}/images/whattheywant.jpg`}
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
                                image={`${process.env.PUBLIC_URL}/images/HEARTEATER.jpg`}
                                text="Explores the root of heartbreak"
                                artist="Knowbody Knows x Shaannessy"
                                apple="https://music.apple.com/us/album/hearteater/1511329558"
                                spotify="https://open.spotify.com/album/0Ki9gyE6iv3oE3Ex68iqmW"
                            />
                        </Col>
                        <Col>
                            <Album
                                title="What They Need" 
                                image={`${process.env.PUBLIC_URL}/images/whattheyneed.jpg`}
                                text="Explores the root of heartbreak"
                                artist="Shaannessy"
                                date="June 6, 2019"
                                apple="https://music.apple.com/us/album/what-they-need/1467305967"
                            />
                        </Col>
                    </Row>
                    <br></br>
                    <h1>Singles</h1>
                    <Row>
                        <Col>
                            <Album
                                title="King" 
                                image={`${process.env.PUBLIC_URL}/images/king.jpg`}
                                text="this project explores the root of heartbreak"
                                artist="Shaannessy"
                                date="June 6, 2019"
                                apple="https://music.apple.com/us/album/king/1490350458?i=1490350459"
                            />
                        </Col>
                        <Col>
                            <Album
                                title="They Bay" 
                                image={`${process.env.PUBLIC_URL}/images/thebay.jpg`}
                                text="this project explores the root of heartbreak"
                                artist="Shaannessy"
                                date="June 6, 2019"
                                apple="https://music.apple.com/us/album/the-bay-single/1470037353"
                            />
                        </Col>
                    </Row>
                </Container>
              
          </div>
        )
    }

}



export default New;