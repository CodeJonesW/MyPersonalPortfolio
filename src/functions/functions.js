import React, { Component } from 'react';


const APIKEY = process.env.REACT_APP_API_KEY


export default function fetchNasaApi() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${APIKEY}`)
        .then(res => res.json())
        .then(data => this.setState({ astroDaily: data }))
}

