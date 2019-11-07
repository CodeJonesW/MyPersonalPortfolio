import React, { Component } from 'react';
import selfie from '../../images/profile_picture.jpg'
import { Card, Row, Col, Container } from "react-bootstrap"
class About extends React.Component {

    render() {
        return (
            <div id="About">
                <Row className="d-flex justify-content-center m-3">
                    <Col md={3}>
                        <img className="m-3" id="profilepic" src={selfie} alt="hi" />
                    </Col>

                    <Col style={{ 'margin': '130px' }} md={6}>
                        <Card className="m-3">
                            <p> Lorem Ipsum</p>
                        </Card>
                    </Col>
                </Row>
            </div >
        );
    }
}

export default About;