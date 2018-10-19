import React from 'react';
import './Card.css';
import { Card, CardSubtitle, CardBody, CardText } from 'reactstrap'; 

const CardContent = () => {
    return (
        <CardBody>
            <CardSubtitle>Get started with React</CardSubtitle>
            <CardText>React makes it painless to create interactive UIs. Design simple views for each state in your application.</CardText>
            <CardText>
                <small className="text-muted">reactjs.com</small>
            </CardText>
        </CardBody>
    )
}

export default CardContent;