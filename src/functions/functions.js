import React, { Component } from 'react';
import { Card, Row, Col, Container } from "react-bootstrap"


const APIKEY = process.env.REACT_APP_API_KEY


export function fetchNasaApi() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${APIKEY}`)
        .then(res => res.json())
        .then(data => this.setState({ astroDaily: data }))
}


export default function mediaType(data) {
    if (data.media_type === "video") {
        return <iframe id="NasaVideo" src={data.url}></iframe>
    } else {
        return <Card.Img id="NasaImg" src={data.url} />
    }
};