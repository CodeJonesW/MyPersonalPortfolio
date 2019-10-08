import React, { Component } from 'react';
import Project1 from '../Cards/Project1';
import Introduction from '../Introduction'
import Card07 from "../Cards/Project2";

class HomePage extends React.Component {

    render() {
        return (
            <div id="HomePage">
                <p>Will's Portfolio </p>
                <Introduction />
                <Project1 />

            </div>
        );
    }
}

export default HomePage;