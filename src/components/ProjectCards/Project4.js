import React from "react";
import bug1 from '../../images/buginvaders/BugInvader.png'


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
            <CardHeader>Bug Invaders</CardHeader>

            <Carousel className="carouselItem" controls={false} interval={null} slide={false} wrap={false}>
                <Carousel.Item >
                    <CardImg src={bug1} className="bugInvaderImg" />
                </Carousel.Item>

            </Carousel>
            <CardBody>
                <p> A single page app that replicates a classic shooter arcade game.</p>



                <a href="https://bug-invaders.web.app/" target="_blank">
                    <button size='sm' className="myButton" >Live Website &rarr;</button>
                </a>
                <a href="https://github.com/CodeJonesW/bug_invaders_frontend" target="_blank">
                    <button size='sm' className="myButton" >Github &rarr;</button>
                </a>

            </CardBody>

        </Card>
    );
}