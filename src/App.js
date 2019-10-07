import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/Pages/HomePage';
import NavBar from './components/NavBar';
import { Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
