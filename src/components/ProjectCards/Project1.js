import React from "react";
import CalorieTracker from '../../images/CalorieTracker_I_O_1.png'
import {
    Card,
    CardHeader,
    CardTitle,
    CardImg,
    CardBody,
    CardFooter,
    Button
} from "shards-react";

export default function Project1() {
    return (
        <Card className="Card m-3">
            <CardHeader>CalorieTracker I/O</CardHeader>
            <CardImg src={CalorieTracker} id="CalorieTrackerImg" />
            <CardBody>
                <CardTitle>Lorem Ipsum</CardTitle>
                <p>Lorem ipsum dolor sit amet.</p>
                <Button>Read more &rarr;</Button>
            </CardBody>
        </Card>
    );
}