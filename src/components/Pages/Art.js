import React, { Component } from 'react';
import { Card, Row, Col, Container } from "react-bootstrap"
import wjgw from '../../images/wjgw.png'

class Art extends React.Component {

    render() {
        return (
            <div id="Art">
                <Row className="d-flex justify-content-center m-3">
                    <Col md={3}>
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