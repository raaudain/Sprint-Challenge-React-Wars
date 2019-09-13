import React from "react";
import {Col, Card, CardBody, CardTitle, CardText} from "reactstrap"




const CharCard = props =>{
    return (

        

        <Col md="4" key={props.id}>
            <Card>
                <CardBody>
                    <CardTitle tag="h2">{props.name}</CardTitle>
                    <CardText className="text-left">Gender: {props.gender}</CardText>
                    <CardText className="text-left">Birth Year: {props.birth_year}</CardText>
                    <CardText className="text-left">Height: {props.height}</CardText>
                    <CardText className="text-left">Mass: {props.mass}</CardText>
                </CardBody>
            </Card>
    
        </Col>
    )
}

export default CharCard;