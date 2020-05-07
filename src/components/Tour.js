import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import './Tour.css';



class Tour extends Component {
    render() {
        return (
            <div classname="image">
                <Image src='images/alone.jpg' className="header-image" />
                <h2>This is working</h2>
            </div>
        )
    }

}



export default Tour;