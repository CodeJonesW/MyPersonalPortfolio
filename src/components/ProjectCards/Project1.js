import React from "react";
import paws1 from '../../images/petlantaPaws/Screen Shot 2019-11-20 at 8.23.48 PM.png'
import paws2 from '../../images/petlantaPaws/Screen Shot 2019-11-20 at 8.25.01 PM.png'
import paws3 from '../../images/petlantaPaws/Screen Shot 2019-11-20 at 8.25.18 PM.png'
import paws4 from '../../images/petlantaPaws/Screen Shot 2019-11-20 at 8.25.27 PM.png'
import paws5 from '../../images/petlantaPaws/Screen Shot 2019-11-20 at 8.25.44 PM.png'





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
            <CardHeader>Petlanta Paws</CardHeader>

            <Carousel className="carouselItem" controls={true} interval={null} slide={true} wrap={true}>
                <Carousel.Item >
                    <CardImg src={paws1} className="PetlantaPawsImg" />
                </Carousel.Item>
                <Carousel.Item >
                    <CardImg src={paws2} className="PetlantaPawsImg" />
                </Carousel.Item>
                <Carousel.Item >
                    <CardImg src={paws3} className="PetlantaPawsImg" />
                </Carousel.Item>
                <Carousel.Item >
                    <CardImg src={paws4} className="PetlantaPawsImg" />
                </Carousel.Item>
                <Carousel.Item >
                    <CardImg src={paws5} className="PetlantaPawsImg" />
                </Carousel.Item>
            </Carousel>
            <CardBody>
                <p>An app for users to adopt and find new homes for animal friends.</p>



                <a href="https://petlanta-paws-app.herokuapp.com/login" target="_blank">
                    <button size='sm' className="myButton" >Live Website &rarr;</button>
                </a>

            </CardBody>

        </Card>
    );
}