import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Image, ListGroup } from 'react-bootstrap';
import './Tour.css';



class Tour extends Component {
    render() {
        return (
            <div>
                <Image src={`${process.env.PUBLIC_URL}/images/alone.jpg`} className="header-image" />
                <ul className="centered-left">
                    <li><emp>2/21 ...... Oakland, Ca</emp></li>
                    <li>3/21 ...... Los Angeles, Ca</li>
                    <li>4/12 ...... Miami, Fl</li>
                    <li>4/23 ...... Richmond, Va</li>
                </ul>
                <ul className="centered-right">
                    <li>5/3 ...... Vancouver, BC</li>
                    <li>5/17 ...... Sacramento, Ca</li>
                    <li>6/23 ...... Orlando, Fl</li>
                    <li>7/9 ...... Chicago, IL</li>
                </ul>
                <ul className="bottom-left">
                    <li>5/3 ...... Vancouver, BC</li>
                    <li>5/17 ...... Sacramento, Ca</li>
                    <li>6/23 ...... Orlando, Fl</li>
                    <li>7/9 ...... Chicago, IL</li>
                </ul>
                <ul className="bottom-right">
                    <li>5/3 ...... Vancouver, BC</li>
                    <li>5/17 ...... Sacramento, Ca</li>
                    <li>6/23 ...... Orlando, Fl</li>
                    <li>7/9 ...... Chicago, IL</li>
                </ul>
            </div>
        )
    }

}



export default Tour;