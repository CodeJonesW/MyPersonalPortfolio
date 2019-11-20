import React, { Component } from 'react';
import './App.css';
import Contact from './components/Pages/Contact'
import Art from './components/Pages/Art'
import About from './components/Pages/About'
import NavBar from './components/NavBar';
import Projects from './components/Pages/Projects';
import { Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import fetchNasaApi from '../src/functions/functions'

class App extends React.Component {




  render() {
    return (
      <div >
        <NavBar />
        <div id="content">
          {
            <Switch>
              <Route exact path="/" render={() => <About />} />
              <Route exact path='/contact' render={() => <Contact />} />
              <Route exact path='/about' render={() => <About />} />
              <Route exact path='/projects' render={() => <Projects />} />
              <Route exact path='/art' render={() => <Art />} />
            </Switch>
          }
        </div>
      </div>
    )
  };
}

export default App;
