import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Image, ListGroup } from 'react-bootstrap';
import './Tour.css';



class Tour extends Component {
    render() {
        return (
            <div className="image">
                <Image src={`${process.env.PUBLIC_URL}/images/alone.jpg`} className="header-image" />
                <h1 className="Top-left">Alone Tour</h1>
                <ListGroup className="centerd">
                    <ListGroup.Item action variant="danger">
                        Danger
                    </ListGroup.Item>
                </ListGroup>
                
            </div>
        )
    }

}



export default Tour;