import React from "react";
import CalorieTracker from '../../images/CalorieTracker_I_O_1.png'
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
            <CardHeader>CalorieTracker I/O</CardHeader>

            <Carousel className="carouselItem" controls={true} interval={null} slide={true} wrap={true}>
                <Carousel.Item >
                    <CardImg src={CalorieTracker} id="CalorieTrackerImg" />
                </Carousel.Item>
                <Carousel.Item >
                    <CardImg src={CalorieTracker} id="CalorieTrackerImg" />
                </Carousel.Item>
                <Carousel.Item >
                    <CardImg src={CalorieTracker} id="CalorieTrackerImg" />
                </Carousel.Item>
            </Carousel>
            <CardBody>
                <p>Allows users to chart calories in relation to food intake and exercises over time.</p>


                <button size='sm' className="myButton" >Details</button>
                <a href="https://calorietracker-i-o.web.app/profile" target="_blank">
                    <button size='sm' className="myButton" >Live Website &rarr;</button>
                </a>

            </CardBody>

        </Card>
    );
}