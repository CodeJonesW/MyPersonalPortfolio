import React, { Component } from 'react';
import { Card, Row, Col, Container } from "react-bootstrap"
import github from '../../images/Github_Logo.png'
import github_2 from '../../images/Github_Logo_2.png'
import gmail from '../../images/Gmail_logo.png'
import twitter from '../../images/twitter_logo.png'
import linkedIn from '../../images/LinkedIn_logo.jpg'
import resume from '../../images/resume_logo_2.png'

class Contact extends React.Component {

    render() {
        return (
            <div id="Contact">
                <Row className="d-flex justify-content-center m-3">

                    <Col md={6} >

                        <h5>
                            williamjonescodes@gmail.com

                                </h5>


                    </Col>
                </Row>
                <Row>
                    <Col md={12} style={{ 'padding': '20px' }}>
                    </Col>
                </Row>

                <Row>
                    <Col md={3}>
                        <a href="https://github.com/CodeJonesW">
                            <img className="circleLogo" src={github} />
                        </a>
                    </Col>

                    <Col md={3}>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=williamjonescodes@gmail.com">
                            <img id="gmailLogo" src={gmail} />
                        </a>
                    </Col>

                    <Col md={3}>
                        <a href="https://twitter.com/CodeWJones">
                            <img className="circleLogo" src={twitter} />
                        </a>
                    </Col>

                    <Col md={3}>
                        <a href="https://www.linkedin.com/in/william-jones-8984b4189/">
                            <img className="circleLogo" src={linkedIn} />
                        </a>
                    </Col>

                </Row>

            </div >
        );
    }
}

export default Contact;