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
                    <li><emp>2/21 ...... Oakland, CA</emp></li>
                    <li>3/21 ...... Los Angeles, CA</li>
                    <li>4/12 ...... Miami, Fl</li>
                    <li>4/23 ...... Richmond, Va</li>
                </ul>
                <ul className="centered-right">
                    <li>5/3 ...... Vancouver, BC</li>
                    <li>5/17 ...... Sacramento, CA</li>
                    <li>6/23 ...... Orlando, Fl</li>
                    <li>7/9 ...... Chicago, IL</li>
                </ul>
                <ul className="bottom-left">
                    <li>8/3 ...... London, UK</li>
                    <li>8/17 ...... Las Vegas, NV</li>
                    <li>9/23 ...... Reno, NV</li>
                    <li>10/9 ...... Aspen, CO</li>
                </ul>
                <ul className="bottom-right">
                    <li>11/3 ...... New Orleans, LA</li>
                    <li>11/17 ...... Salt Lake City, UT</li>
                    <li>11/23 ...... Bend, OR</li>
                    <li>12/9 ...... Morrison, CO</li>
                </ul>
            </div>
        )
    }

}



export default Tour;