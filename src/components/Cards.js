import React from 'react'
import {Card, Button} from 'react-bootstrap'
export const Cards = (props) => {
    return (
        <div className="col">
            <Card style={{ width: '18rem' }} className="card">
                
                <Card.Img variant="top" src={props.photo}/>
                <Card.Body>
                    <Card.Title className="cardTitle">{props.title}</Card.Title>
                    <Card.Text>{props.text}</Card.Text>
                    <Button variant="primary" className="button" href={props.githubSite} target="_blank">View Code</Button>
                    <Button variant="primary" className="button" href={props.appSite} target="_blank">Live Site</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Cards;
