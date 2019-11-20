import React, { Component } from 'react';
import { Card, Row, Col, Container } from "react-bootstrap"
import wjgw from '../../images/wjgw.png'

class Art extends React.Component {

    render() {
        return (
            <div id="Art">
                <Row className="d-flex justify-content-center m-3">
                    <Col md={6}>
                        <Card className="m-3" style={{ 'padding': '10px' }}>

                            <Card.Text style={{ 'margin': '10px' }}>
                                Before finding my passion for technology, I designed and created scientific glass and art.
                                Creating small components in order to combine into a higher functioning system is a common thread
                                between software engineering and glassblowing design. While I still make glass art as a hobbiest,
                                I have loved applying a familiar thought process to a new medium as I grow as technologist. My logo
                                will link you to the Will Jones Glassworks website.
                            </Card.Text>

                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="m-3" style={{ 'padding': '10px' }}>

                            <a href="https://willjonesglassworks.net">
                                <Card.Img src={wjgw} id="wjgw" ></Card.Img>
                            </a>

                        </Card>
                    </Col>

                </Row>

            </div >
        );
    }
}

export default Art;