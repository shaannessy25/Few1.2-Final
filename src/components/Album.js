import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Card,ListGroup, ListGroupItem, Carousel } from 'react-bootstrap';




function Album (props) {
    const { title, image, text, artist, date, apple, spotify, youtube } = props
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                </Card.Body>
                    <ListGroup className="list-group-flush">
                    <ListGroupItem>Artist: {artist}</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Released: {date}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                    <Card.Link href={apple}>Apple Music</Card.Link>
                    <Card.Link href={spotify}>Spotify</Card.Link>
                    <Card.Link href={youtube}>Youtube</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}



export default Album;