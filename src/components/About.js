import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './About.css';



class About extends Component {
    render() {
        return (
            <div>
                <Container>
                <Image src={`${process.env.PUBLIC_URL}/images/about.jpg`} className="header-image" fluid />    
                    <Jumbotron className='centered'>
                        <h2>About</h2>
                        <p>Shaannessy also known as Shaan Hurley was, born in 1994
                            in Oakland, Ca. He would then spend his later years moving house to house
                            throughout the Bay Area. Shaannessy has a mixed ethnicity, his father hailing from Ireland
                            and his mother from the Fiji Islands. Shaannessy first began his music careet in 2018, which 
                            followed with his debut album What They Need. With tracks Alone and Relapse topping his personal 
                            chart with 500 and 453 streams respectively.
                        </p>
                    </Jumbotron>
                </Container>
            </div>
        )
    }

}



export default About;