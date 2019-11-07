import React, { Component } from 'react';
import selfie from '../../images/profile_picture.jpg'
import { Card, Row, Col, Container } from "react-bootstrap"
class About extends React.Component {

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
            </div >
        );
    }
}

export default About;