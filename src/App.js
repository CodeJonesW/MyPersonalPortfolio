import React, { Component } from 'react';
import './App.css';
import HomePage from './components/Pages/HomePage';
import Contact from './components/Pages/Contact'
import About from './components/Pages/About'
import NavBar from './components/NavBar';
import Projects from './components/Pages/Projects';
import { Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { slide as Menu } from 'react-burger-menu'

class App extends React.Component {

  render() {
    return (
      <div >
        <NavBar />
        <div id="content">
          {
            <Switch>
              <Route exact path="/" render={() => <HomePage />} />
              <Route exact path='/contact' render={() => <Contact />} />
              <Route exact path='/about' render={() => <About />} />
              <Route exact path='/projects' render={() => <Projects />} />
            </Switch>
          }
        </div>
      </div>
    )
  };
}

export default App;
