import React from "react";
import jamUpPic1 from "../../images/jamUp/Screen Shot 2021-03-07 at 11.16.34 PM.png";
import jamUpPic2 from "../../images/jamUp/Screen Shot 2021-03-08 at 1.43.41 PM.png";

import { Carousel, ButtonGroup, Button } from "react-bootstrap";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
} from "shards-react";

export default function Project2() {
  return (
    <Card className="Card m-3">
      <CardHeader>JamUp</CardHeader>

      <Carousel
        className="carouselItem"
        controls={true}
        interval={null}
        slide={true}
        wrap={true}
      >
        <Carousel.Item>
          <CardImg src={jamUpPic2} className="brewsterImg" />
        </Carousel.Item>
        <Carousel.Item>
          <CardImg src={jamUpPic1} className="brewsterImg" />
        </Carousel.Item>
      </Carousel>
      <CardBody>
        <p>React, Firebase Auth, Express, mySQL Musician Meetup App</p>

        <a href="https://jamup.org/" target="_blank">
          <button size="sm" className="myButton">
            Live Website &rarr;
          </button>
        </a>
        <a href="https://github.com/CodeJonesW/JamUp" target="_blank">
          <button size="sm" className="myButton">
            Github &rarr;
          </button>
        </a>
      </CardBody>
    </Card>
  );
}
