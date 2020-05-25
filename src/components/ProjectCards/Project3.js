import React from "react";
import brew1 from '../../images/brewster/Screen Shot 2019-11-20 at 10.49.26 PM.png'
import brew2 from '../../images/brewster/Screen Shot 2019-11-20 at 10.49.36 PM.png'
import brew3 from '../../images/brewster/Screen Shot 2019-11-20 at 10.49.59 PM.png'


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
            <CardHeader>Brewster</CardHeader>

            <Carousel className="carouselItem" controls={true} interval={null} slide={true} wrap={true}>
                <Carousel.Item >
                    <CardImg src={brew1} className="brewsterImg" />
                </Carousel.Item>
                <Carousel.Item >
                    <CardImg src={brew2} className="brewsterImg" />
                </Carousel.Item>
                <Carousel.Item >
                    <CardImg src={brew3} className="brewsterImg" />
                </Carousel.Item>

            </Carousel>
            <CardBody>
                <p>Find, review, and save favorite craft beers.</p>



                <a href="https://brewster-4d53f.firebaseapp.com/login" target="_blank">
                    <button size='sm' className="myButton" >Live Website &rarr;</button>
                </a>

            </CardBody>

        </Card>
    );
}