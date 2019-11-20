import React, { Component } from 'react';
import selfie from '../../images/profile_picture.jpg'
import jsLogo from '../../images/JavaScript_logo.png'
import railsLogo from '../../images/rails-1-logo.png'
import reactLogo from '../../images/react_logo_.png'
import reduxLogo from '../../images/redux_logo.png'
import nodeLogo from '../../images/NodeJS_logo.png'
import postgresSqlLogo from '../../images/postgres_logo.png'
import gitHubLogo from '../../images/github_logo_PNG.png'


import { Card, Row, Col, Container } from "react-bootstrap"
// import fetchNasaApi from '../../functions/functions'

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
    }

    render() {
        return (
            <div id="About">
                <Row className="d-flex justify-content-center m-3">
                    <Col md={5}>
                        <img className="m-3" id="profilepic" src={selfie} alt="hi" />
                    </Col>

                    <Col md={6} style={{ 'padding': '50px' }}>
                        <Card className="m-3" >
                            <Card.Body>
                                Full stack web developer with a love for creating, problem solving, and improving user’s relationships with
                                websites. Experience in JavaScript, React, Ruby on Rails, and a
                                background in craft and design. Ability to work on a team comprised of different perspectives
                                and has been recognized for synthesizing ideas in a fluid and productive way.
                                Strives to use and continually learn the best communication techniques both in technical and interpersonal experiences.
                                Possesses the drive and intuition to work independently. The combination of these talents can help unify cross functional teams,
                                maintain a high level of productivity and create a positive impact.
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center m-3">
                    <Col md={12} style={{ 'padding': '150px' }}>

                    </Col>
                </Row>
                <Row>
                    <Col md={5} style={{ 'padding': '50px' }}>
                        <Card style={{ 'margin': '50px' }}>
                            <Card.Body>
                                History, astronomy, philosophy, and music are some of my favorite topics. Software development
                                has also become a top contender. Playing music,
                                running, and cooking at home are some of my most frequented hobbies.
                                I am always learning new languages, frameworks, and other technologies to advance
                                my development process.
                            </Card.Body>
                        </Card>
                        <Card >
                            <Row className="d-flex justify-content-center m-1">
                                <Col style={{ 'margin': '2px' }} md={2}>
                                    <Card.Img className="technologies" src={reactLogo} />
                                </Col>
                                <Col style={{ 'margin': '2px' }} md={2}>
                                    <Card.Img className="technologies" src={reduxLogo} />
                                </Col>
                                <Col style={{ 'margin': '2px' }} md={2}>
                                    <Card.Img className="technologies" src={jsLogo} />
                                </Col>
                                <Col style={{ 'margin': '2px' }} md={2}>
                                    <Card.Img className="technologies" src={nodeLogo} />
                                </Col>
                                <Col style={{ 'margin': '2px' }} md={2}>
                                    <Card.Img className="technologies" src={railsLogo} />
                                </Col>
                                <Col style={{ 'margin': '2px' }} md={2}>
                                    <Card.Img className="technologies" src={postgresSqlLogo} />
                                </Col>
                                <Col style={{ 'margin': '2px' }} md={2}>
                                    <Card.Img className="technologies" src={gitHubLogo} />
                                </Col>


                            </Row>
                        </Card>
                    </Col>
                    <Col md={7} style={{ 'padding': '50px' }}>
                        <Card style={{ 'padding': '20px' }}>
                            <Card.Title>
                                Nasa's Astronomy Picture of the Day
                            </Card.Title>
                            <Card.Img id="NasaImg" src={this.state.astroDaily.url} />
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