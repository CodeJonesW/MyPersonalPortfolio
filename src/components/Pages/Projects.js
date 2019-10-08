import React, { Component } from 'react';
import Project1 from '../Cards/Project1';
import Project2 from '../Cards/Project2';
import { Card, Row, Col, Container } from "react-bootstrap"

class Projects extends React.Component {

    render() {
        return (
            <div id="Projects">
                <p>Will's Projects </p>
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