import React, { Component } from 'react';
import selfie from '../../images/profile_picture.jpg'
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
                <Row>
                    <Col md={12} style={{ 'padding': '150px' }}>
                    </Col>
                </Row>
                <Row>
                    <Col md={5} style={{ 'padding': '50px' }}>
                        <Card>
                            <Card.Body>
                                I also really enjoy the learning in my free time.
                                Astronomy, philosophy, and music are some of my favorite topics.
                                Learning new music production techniques and combining them with
                                playing guitar or piano is another one of my favorite hobbies.
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={7} style={{ 'padding': '50px' }}>
                        <Card style={{ 'padding': '20px' }}>
                            <Card.Title>
                                Nasa's Astronomy Picture of the Day
                            </Card.Title>
                            <Card.Img id="NasaImg" src={this.state.astroDaily.url} />
                            <Card.Body>
                                {this.state.astroDaily.explanation}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div >
        );
    }
}

export default About;