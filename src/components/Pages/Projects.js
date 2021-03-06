import React, { Component } from 'react';
import Project1 from '../ProjectCards/Project1';
import Project2 from '../ProjectCards/Project2';
import Project3 from '../ProjectCards/Project3';
import Project4 from '../ProjectCards/Project4';
import Project5 from '../ProjectCards/Project5';
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
                    {/* jam up */}
                    <Col style={{ "minWidth": "250px" }} md={3}>
                        <Project3 />
                    </Col>
                    <Col style={{ "minWidth": "250px" }} md={3}>
                        <Project5 />
                    </Col>
                    <Col style={{ "minWidth": "250px" }} md={3}>
                        <Project2 />
                    </Col>
                    <Col style={{ "minWidth": "250px" }} md={3}>
                        <Project1 />
                    </Col>
                </Row>


            </div>
        );
    }
}

export default Projects;