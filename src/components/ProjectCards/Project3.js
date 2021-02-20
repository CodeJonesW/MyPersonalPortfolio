import React from "react";
import jamUpPic from '../../images/JamUp.png'
import { Carousel, ButtonGroup, Button } from 'react-bootstrap'
import {
    Card,
    CardHeader,
    CardTitle,
    CardImg,
    CardBody,
    CardFooter
} from "shards-react";


export default function Project2() {


    return (
        <Card className="Card m-3">
            <CardHeader>JamUp</CardHeader>

            <Carousel className="carouselItem" controls={true} interval={null} slide={true} wrap={true}>
                <Carousel.Item >
                    <CardImg src={jamUpPic} className="brewsterImg" />
                </Carousel.Item>

            </Carousel>
            <CardBody>
                <p>Meet up tool to allow musicians to find online jams via apps like Jamulus</p>



                <a href="https://jamupdev.firebaseapp.com/" target="_blank">
                    <button size='sm' className="myButton" >Live Website &rarr;</button>
                </a>
                <a href="https://github.com/CodeJonesW/JamUp" target="_blank">
                    <button size='sm' className="myButton" >Github &rarr;</button>
                </a>


            </CardBody>

        </Card>
    );
}