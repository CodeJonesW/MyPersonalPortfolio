import React, { Component } from 'react';
import Project1 from '../Cards/Project1';
import Project2 from '../Cards/Project2';
import { Row, Col } from "react-bootstrap"
import { Card, CardHeader } from "shards-react";
class Projects extends React.Component {

    render() {
        return (
            <div id="Projects">
                <Row className="d-flex justify-content-center m-3">
                    <Col style={{ "padding": "20px" }} md={12}>

                    </Col>
                </Row>

                <Row className="d-flex justify-content-center m-3">
                    <Col md={3}>
                        <Project2 />
                    </Col>

                    <Col md={3}>
                        <Project2 />
                    </Col>

                    <Col md={3}>
                        <Project2 />
                    </Col>
                </Row>


            </div>
        );
    }
}

export default Projects;