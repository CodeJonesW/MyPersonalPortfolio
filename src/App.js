import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';

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
