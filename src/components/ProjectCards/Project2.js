import React from "react";
import calorie1 from '../../images/calorietracker/Screen Shot 2019-11-20 at 9.00.07 PM.png'
import calorie2 from '../../images/calorietracker/Screen Shot 2019-11-20 at 9.00.22 PM.png'
import calorie3 from '../../images/calorietracker/Screen Shot 2019-11-20 at 9.00.34 PM.png'
import calorie4 from '../../images/calorietracker/Screen Shot 2019-11-20 at 9.00.45 PM.png'
import calorie5 from '../../images/calorietracker/Screen Shot 2019-11-20 at 9.00.55 PM.png'
import calorie6 from '../../images/calorietracker/Screen Shot 2019-11-20 at 9.01.04 PM.png'
import calorie7 from '../../images/calorietracker/Screen Shot 2019-11-20 at 9.02.07 PM.png'


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
            <CardHeader>CalorieTracker</CardHeader>

            <Carousel className="carouselItem" controls={true} interval={null} slide={true} wrap={true}>
                <Carousel.Item >
                    <CardImg src={calorie1} className="CalorieTrackerImg" />
                </Carousel.Item>
                <Carousel.Item >
                    <CardImg src={calorie2} className="CalorieTrackerImg" />
                </Carousel.Item>
                <Carousel.Item >
                    <CardImg src={calorie3} className="CalorieTrackerImg" />
                </Carousel.Item>
                <Carousel.Item >
                    <CardImg src={calorie4} className="CalorieTrackerImg" />
                </Carousel.Item>
                <Carousel.Item >
                    <CardImg src={calorie5} className="CalorieTrackerImg" />
                </Carousel.Item>
                <Carousel.Item >
                    <CardImg src={calorie6} className="CalorieTrackerImg" />
                </Carousel.Item>
                <Carousel.Item >
                    <CardImg src={calorie7} className="CalorieTrackerImg" />
                </Carousel.Item>
            </Carousel>
            <CardBody>
                <p>Compare food and exercises over time. React and Rails</p>



                <a href="https://calorietracker-i-o.web.app/profile" target="_blank">
                    <button size='sm' className="myButton" >Live Website &rarr;</button>
                </a>
                <a href="https://github.com/CodeJonesW/CalorieTracker_I-O" target="_blank">
                    <button size='sm' className="myButton" >Github &rarr;</button>
                </a>

            </CardBody>

        </Card>
    );
}