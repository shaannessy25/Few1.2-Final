import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';



class Home extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row className="show-grid text-center">
                    <Col sm={8} className="person-wrapper">
                            <Image src={`${process.env.PUBLIC_URL}/images/shaan.jpg`} fluid/>
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