import React, { Component } from 'react';
import { Card, Row, Col, Container } from "react-bootstrap"
import github from '../../images/Github_Logo.png'
import gmail from '../../images/Gmail_logo.png'
class Contact extends React.Component {

    render() {
        return (
            <div id="Contact">
                <Row className="d-flex justify-content-center m-3">
                    <Col md={5}>
                        <a href="https://github.com/CodeJonesW">
                            <img id="gitHubLogo" src={github} />
                        </a>
                    </Col>

                    <Col md={5}>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=williamjonescodes@gmail.com">
                            <img id="gmailLogo" src={gmail} />
                        </a>
                    </Col>

                    <Col md={6} style={{ 'padding': '50px' }}>
                        <Card className="m-3" >
                            <Card.Body>
                                Contact Info
                                <br />
                                Email: williamjonescodes@gmail.com
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div >
        );
    }
}

export default Contact;