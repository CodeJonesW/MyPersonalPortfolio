import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/Pages/HomePage';
import Contact from './components/Pages/Contact'
import About from './components/Pages/About'
import NavBar from './components/NavBar';
import { Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import Projects from './components/Pages/Projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      {
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route exact path='/contact' render={() => <Contact />} />
          <Route exact path='/about' render={() => <About />} />
          <Route exact path='/projects' render={() => <Projects />} />
        </Switch>
      }
    </div>
  );
}

export default App;
