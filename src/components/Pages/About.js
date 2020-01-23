import React, { Component } from 'react';
import selfie from '../../images/profile_picture.jpg'
import jsLogo from '../../images/JavaScript_logo.png'
import railsLogo from '../../images/rails-1-logo.png'
import reactLogo from '../../images/react_logo_.png'
import reduxLogo from '../../images/redux_logo.png'
import nodeLogo from '../../images/NodeJS_logo.png'
import postgresSqlLogo from '../../images/postgres_logo.png'
import gitHubLogo from '../../images/github_logo_PNG.png'
import cssLogo from '../../images/css_logo_>.png'
import htmlLogo from '../../images/HTML_Logo.png'
import dockerLogo from '../../images/docker-logo.png'
import typescriptLogo from '../../images/typescript_logo.png'
import rubyLogo from '../../images/ruby_Logo.png'
import bootstrapLogo from '../../images/bootstrap_logo.png'
import tddLogo from '../../images/tdd_logo.png'
import jQueryLogo from '../../images/jquery.png'
import expressLogo from '../../images/express_logo2.webp'
import resume from '../../images/resume_logo_2.png'
import { Card, Row, Col, Container } from "react-bootstrap"
// import fetchNasaApi from '../../functions/functions'
import mediaType from '../../functions/functions'
import githubCalendar from 'github-calendar'

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

        githubCalendar(".calendar", "CodeJonesW", { responsive: true });
    }



    render() {
        let logos = [reactLogo, reduxLogo, jsLogo, nodeLogo, expressLogo, railsLogo, rubyLogo, postgresSqlLogo, gitHubLogo, cssLogo, htmlLogo, dockerLogo, typescriptLogo, bootstrapLogo, tddLogo, jQueryLogo];
        let media
        console.log(this.state.astroDaily)
        return (
            <div id="About">
                <Row className="d-flex justify-content-center m-3">
                    <Col md={5}>
                        <img className="m-3" id="profilepic" src={selfie} alt="Profile Picture" />
                    </Col>

                    <Col md={6} style={{ 'padding': '5vh', 'min-width': '40vh' }}>
                        <Card className="m-3" >
                            <Card.Body>
                                As a full-stack web developer, I love creating, problem solving, and improving website experiences. I have written code in a multitude of languages and am always striving to learn more. I currently work for CSTech developing ecommerce backend architecture and provide tutoring assistance to bootcamp students learning to code. Consistently improving my communication techniques in regards to software is an important ongoing goal of mine. I am driven to work independently, but also believe team collaboration is a fundamental part of finding the best solutions.
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center m-3">
                    <Col md={12} style={{ 'padding': '250px', 'margin': '20px' }}>
                        <div class="calendar">

                        </div>
                    </Col>
                </Row>
                <Row >
                    <Col md={6} style={{ 'padding': '50px' }}>
                        <Card style={{ 'margin': '25px', 'minWidth': '300px' }}>
                            <Card.Body>
                                Outside of software, I enjoy learning about history, astronomy, philosophy, and music.
                                Playing guitar, running, and cooking at home are some of my favorite hobbies.
                                I am always learning new languages, frameworks, and other technologies to advance
                                my development process.
                            </Card.Body>
                        </Card>
                        <Card style={{ 'minWidth': '300px', 'margin': '25px' }} >
                            <Row className="d-flex justify-content-center m-1">
                                {logos.map(logo =>
                                    <Col style={{ 'margin': '1px' }} md={2}>
                                        <Card.Img className="technologies" src={logo} />
                                    </Col>
                                )}
                            </Row>
                        </Card>
                        {/* <Card id="resume" style={{ 'margin': '25px', 'width': '70px' }}>

                            <a href="https://learn.co/CodeJonesW/resume" target="_blank">
                                <Card.Img id="resumeLogo" src={resume} />
                                <Card.Text id="linkText">Resume Link:</Card.Text>
                            </a>

                        </Card> */}


                    </Col>
                    <Col md={6} style={{ 'padding': '50px' }}>
                        <Card id="astroCard" style={{ 'margin': '10px', 'padding': '10px' }}>
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