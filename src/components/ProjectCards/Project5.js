import React from "react";
import standup1 from '../../images/standUp.png'
import standup2 from '../../images/standUp2.png'


import { Carousel, ButtonGroup, Button } from 'react-bootstrap'
import {
    Card,
    CardHeader,
    CardTitle,
    CardImg,
    CardBody,
    CardFooter
} from "shards-react";


export default function Project4() {


    return (
        <Card className="Card m-3">
            <CardHeader>standUp</CardHeader>

            <Carousel className="carouselItem" controls={true} interval={null} slide={true} wrap={true}>
                <Carousel.Item >
                    <CardImg src={standup2} className="bugInvaderImg" />
                </Carousel.Item>
                <Carousel.Item >
                    <CardImg src={standup1} className="bugInvaderImg" />
                </Carousel.Item>

            </Carousel>
            <CardBody>
                <p> React, Node, Express, Sequelize Daily Developer StandUp app</p>



                <a href="https://standup-eba73.firebaseapp.com/" target="_blank">
                    <button size='sm' className="myButton" >Live Website &rarr;</button>
                </a>
                <a href="https://github.com/CodeJonesW/standUp" target="_blank">
                    <button size='sm' className="myButton" >Github &rarr;</button>
                </a>

            </CardBody>

        </Card>
    );
}