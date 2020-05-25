import React from "react";
import metronome1 from '../../images/metronome/Screen Shot 2020-05-25 at 12.16.15 PM.png'


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
            <CardHeader>Metronome</CardHeader>

            <Carousel className="carouselItem" controls={false} interval={null} slide={false} wrap={false}>
                <Carousel.Item >
                    <CardImg src={metronome1} className="bugInvaderImg" />
                </Carousel.Item>

            </Carousel>
            <CardBody>
                <p> Simple metronome application for keeping time in music.</p>



                <a href="https://codejonesw.github.io/MetronomeApp/?" target="_blank">
                    <button size='sm' className="myButton" >Live Website &rarr;</button>
                </a>

            </CardBody>

        </Card>
    );
}