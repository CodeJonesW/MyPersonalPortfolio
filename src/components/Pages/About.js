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
import resume from '../../images/resume_logo_2.png'






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
                                As a full-stack web developer, I love creating, problem solving, and improving users's website experience.
                                I have written code in a multitude of languages and frameworks including
                                JavaScript, React, Node.js, and Rails. I currently work for CSTech developing ecommerce backend architechure.
                                using Node.js. I am also a full-stack engineer mentor who provides tutoring to students learning to code all over America.
                                I strive to use and continually learn the best communication techniques in order to convey my ideas about software in the most understandable
                                way possible. I am driven to work independently, but also enjoy team collaboration. I enjoy
                                maintaining a high level of productivity and creating positive impact.
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
                                <Col style={{ 'margin': '1px' }} md={2}>
                                    <Card.Img className="technologies" src={reactLogo} />
                                </Col>
                                <Col style={{ 'margin': '1px' }} md={2}>
                                    <Card.Img className="technologies" src={reduxLogo} />
                                </Col>
                                <Col style={{ 'margin': '1px' }} md={2}>
                                    <Card.Img className="technologies" src={jsLogo} />
                                </Col>
                                <Col style={{ 'margin': '1px' }} md={2}>
                                    <Card.Img className="technologies" src={nodeLogo} />
                                </Col>
                                <Col style={{ 'margin': '1px' }} md={2}>
                                    <Card.Img className="technologies" src={railsLogo} />
                                </Col>
                                <Col style={{ 'margin': '1px' }} md={2}>
                                    <Card.Img className="technologies" src={rubyLogo} />
                                </Col>
                                <Col style={{ 'margin': '1px' }} md={2}>
                                    <Card.Img className="technologies" src={postgresSqlLogo} />
                                </Col>
                                <Col style={{ 'margin': '1px' }} md={2}>
                                    <Card.Img className="technologies" src={gitHubLogo} />
                                </Col>
                                <Col style={{ 'margin': '1px' }} md={2}>
                                    <Card.Img className="technologies" src={cssLogo} />
                                </Col>
                                <Col style={{ 'margin': '1px' }} md={2}>
                                    <Card.Img className="technologies" src={htmlLogo} />
                                </Col>
                                <Col style={{ 'margin': '1px' }} md={2}>
                                    <Card.Img className="technologies" src={dockerLogo} />
                                </Col>
                                <Col style={{ 'margin': '1px' }} md={2}>
                                    <Card.Img className="technologies" src={typescriptLogo} />
                                </Col>
                                <Col style={{ 'margin': '1px' }} md={2}>
                                    <Card.Img className="technologies" src={bootstrapLogo} />
                                </Col>
                                <Col style={{ 'margin': '1px' }} md={2}>
                                    <Card.Img className="technologies" src={tddLogo} />
                                </Col>


                            </Row>
                        </Card>
                        <Card id="resume" style={{ 'margin': '50px', 'width': '70px' }}>

                            <a href="https://learn.co/CodeJonesW/resume" target="_blank">
                                <Card.Img className="technologies" src={resume} />
                                <Card.Text id="linkText">Resume Link:</Card.Text>
                            </a>

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