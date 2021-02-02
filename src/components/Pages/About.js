import React, { Component } from 'react';
import selfie from '../../images/profile_picture.jpg'
import scroll from '../../images/scroll_down_arrow.png'
import { Card, Row, Col, Container } from "react-bootstrap"
import mediaType from '../../functions/functions'

const APIKEY = process.env.REACT_APP_API_KEY


class About extends React.Component {

    constructor() {
        super()
        this.state = {
            astroDaily: '',
        }
    }

    componentDidMount() {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${APIKEY}`)
            .then(res => res.json())
            .then(data => this.setState({ astroDaily: data }))

        // githubCalendar(".calendar", "CodeJonesW", { responsive: true });
    }



    render() {

        let media
        // console.log(this.state.astroDaily)
        return (
            <div className="container" id="About">
                <Row className="marginTopCss">
                    <Col>
                        <img className="md-3" id="profilepic" src={selfie} alt="Profile Picture" />
                    </Col>

                    <Col >
                        <Card className="md-3" >
                            <Card.Body>
                                I love creating, problem solving, and improving application experiences. I have written code in a variety of languages and am always striving to learn more. Currently, I provide one on one tutoring to bootcamp students learning full stack development. Consistently improving my communication techniques in regards to software is an important ongoing goal of mine. I am driven to work independently, but also am excited by collaboration.
                            </Card.Body>
                        
                        </Card>
                    </Col>
                </Row>
                <Row className="marginTopCss">
                    <Col >

                        <img src={scroll} id="arrow" className="animated bounce" />

                    </Col>
                </Row>
                {/* <Row className="marginTopCss">
                    <Col md={6}>
                        <div class="calendar">

                        </div>
                    </Col>
                </Row> */}
                <Row className="marginTopCss">
                    <Col  md={6}>
                        <Card className="marginTopCss">
                            <Card.Body>
                                Outside of software, I enjoy playing guitar, cooking, and flameworking!
                                I am always learning new languages, frameworks, and other technologies to advance my development process.    
                                <br/>
                                <a  href="/projects">
                                <button class="btn projectsBtn shadow">See my projects</button>
                                </a>
                            </Card.Body>
                        </Card>


                    </Col>
                    <Col md={6} >
                        <Card className="marginTopCss" id="astroCard" style={{ 'padding': '10px' }}>
                            <Card.Title>
                                Nasa's Astronomy Picture of the Day
                            </Card.Title>
                            {mediaType(this.state.astroDaily)}
                            <Card.Body>
                                {this.state.astroDaily.title}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </div >
        );
    }
}

export default About;