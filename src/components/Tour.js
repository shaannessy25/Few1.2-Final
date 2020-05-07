import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import './Tour.css';



class Tour extends Component {
    render() {
        return (
            <div>
                <Image src='images/alone.jpg' className="header-image" />
            </div>
        )
    }

}



export default Tour;