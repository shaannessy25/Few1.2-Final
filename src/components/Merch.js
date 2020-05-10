import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Carousel } from 'react-bootstrap';
import './Merch.css';



class Merch extends Component {
    render() {
        return (
            <div>
                <Container className="carousel-merch">
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={`${process.env.PUBLIC_URL}/images/merch.jpg`}
                            alt="First slide"
                            height="680px"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://wallpaperaccess.com/full/1448056.jpg"
                            alt="Second slide"
                            height="680px"
                            fluid
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://wallpaperplay.com/walls/full/b/4/f/73472.jpg"
                            alt="Third slide"
                            height="680px"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/374044/pexels-photo-374044.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt="=Fourth slide"
                            height="680px"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://i.pinimg.com/originals/50/30/7e/50307e7f1565d0f2436a4bb17a8b37f7.jpg"
                            alt="Fifth slide"
                            height="680px"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Container>
                <Container className="image">
                    <Row className="merch-container">
                        <Col sm><Image src="https://wallpaperplay.com/walls/full/1/6/7/73479.jpg" fluid /></Col>
                        <Col sm><Image src={`${process.env.PUBLIC_URL}/images/merch2.jpg`} fluid /></Col>
                        <Col sm><Image src="https://wallpaperplay.com/walls/full/8/a/9/73451.jpg"fluid /></Col>
                    </Row>
                    <Row>
                        <Col sm><Image src="https://wallpaperplay.com/walls/full/6/c/5/73460.jpg" fluid /></Col>
                        <Col sm><Image src={`${process.env.PUBLIC_URL}/images/merch3.png`} fluid /></Col>
                        <Col sm><Image src="https://dslv9ilpbe7p1.cloudfront.net/CULzEuf91osnsZmp5ijtnw_store_banner_image.jpeg" fluid /></Col>
                    </Row>
                </Container>
            </div>
        )
    }

}



export default Merch;