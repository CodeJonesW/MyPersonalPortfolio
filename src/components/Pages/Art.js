import React, { Component } from 'react';
import { Card, Row, Col, Container } from "react-bootstrap"
import wjgw from '../../images/wjgw.png'
import ornaments from '../../images/ornaments.jpg'

class Art extends React.Component {

    render() {
        return (
            <div id="Art">
                <Row className="d-flex justify-content-center m-3">
                    <Col md={6}>
                        <Card className="m-3" style={{ 'padding': '10px' }}>

                            <Card.Text style={{ 'margin': '10px' }}>
                                Before finding my passion for technology, I spent my time creating and designing glass art.
                                Creating small components with the intention to combine them into a higher functioning system is a distinct commonality
                                between software engineering and glassblowing design. While I still make glass art as a hobbiest,
                                I have loved applying a familiar thought process to a new medium as I grow as technologist. Click my logo
                                to check out my art website.
                            </Card.Text>

                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="m-4" style={{ 'padding': '10px' }}>

                            <a href="https://willjonesglassworks.net" target="_blank">
                                <Card.Img src={wjgw} id="wjgw" ></Card.Img>
                            </a>

                        </Card>
                    </Col>

                </Row>
                <Row className="d-flex justify-content-center m-3">
                    <Col md={4}>
                        <Card>
                            <Card.Img src={ornaments} />
                        </Card>
                    </Col>
                </Row>

            </div >
        );
    }
}

export default Art;