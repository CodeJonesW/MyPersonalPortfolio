import React from "react";
import pocketWeather1 from '../../images/pocketWeatherImgs/Screen Shot 2021-01-15 at 3.21.59 AM.png'
import pocketWeather2 from '../../images/pocketWeatherImgs/Screen Shot 2021-01-15 at 3.20.24 AM.png'

import { Carousel, ButtonGroup, Button } from 'react-bootstrap'
import {
    Card,
    CardHeader,
    CardTitle,
    CardImg,
    CardBody,
    CardFooter
} from "shards-react";


export default function Project1() {


    return (
        <Card className="Card m-3">
            <CardHeader>Pocket Weather</CardHeader>

            <Carousel className="carouselItem" controls={true} interval={null} slide={true} wrap={true}>
                <Carousel.Item >
                    <CardImg src={pocketWeather2} className="PetlantaPawsImg" />
                </Carousel.Item>
                <Carousel.Item >
                    <CardImg src={pocketWeather1} className="PetlantaPawsImg" />
                </Carousel.Item>
           

            </Carousel>
            <CardBody>
                <p>HTML CSS JS Express Mobile Weather App</p>



                <a href="https://weatherman-6cee9.web.app/" target="_blank">
                    <button size='sm' className="myButton" >Live Website &rarr;</button>
                </a>
                <a href="https://github.com/CodeJonesW/pocketWeather" target="_blank">
                    <button size='sm' className="myButton" >Github &rarr;</button>
                </a>

            </CardBody>

        </Card>
    );
}