import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './New.css';



class New extends Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h2>New Me</h2>
                    <p>The official site of Shaannessy</p>
                </Jumbotron>
                <Link to='/'>
                <Button variant="primary">Home</Button> {' '}
                </Link>
            </Container>
        )
    }

}



export default New;