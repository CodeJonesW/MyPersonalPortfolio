import React, { useState, useEffect, Component } from 'react';
import './App.css';
import Contact from './components/Pages/Contact'
import Art from './components/Pages/Art'
import About from './components/Pages/About'
import NavBar from './components/NavBar';
import Projects from './components/Pages/Projects';
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
const APIKEY = process.env.REACT_APP_API_KEY


  function App (){
    // const [astroData, setAstroData] = useState();


  //   useEffect(() => {
  //     fetch(`https://api.nasa.gov/planetary/apod?api_key=${APIKEY}`)
  //         .then(res => res.json())
  //         .then(data => {
  //           setAstroData(data)
  //           // document.body.style.background = astroData.url;
  //         })
  
  //     // githubCalendar(".calendar", "CodeJonesW", { responsive: true });
  // }, [])
  
      return (
        
        <div >
          <NavBar />
          <div id="content">
            {
              <Switch>
                <Route exact path="/" render={() => <About />} />
                <Route exact path='/contact' render={() => <Contact />} />
                <Route exact path='/projects' render={() => <Projects />} />
                {/* <Route exact path='/art' render={() => <Art />} /> */}
              </Switch>
            }
          </div>
        </div>
      )
  }




export default App;
