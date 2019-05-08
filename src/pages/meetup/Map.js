import React, { Component } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';
import styled from "styled-components";

const Wrapper = styled.div`
    width : ${props => props.width};
    height : ${props => props.height};
`;

export default class Map extends Component {
    state = {
        // lat: null,
        // lng: null
        ...this.props,
        isRedirected:false
    }

    componentWillMount() {
        this.setState({
            lat: -7.9780697,
            lng: 112.6316793
        })
    }

    componentDidMount(){
        this.map = L.map('map',{
            center : [this.state.lat, this.state.lng],
            zoom:17,
            zoomControl:false
        })
        
        L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png').addTo(this.map); 

        this.circle = L.circle([this.state.lat, this.state.lng],{
            fillOpacity: 0,
            radius: 0
        }).addTo(this.map)
    }

    updateMap=()=>{
        this.map.removeLayer(this.circle)
        this.map.panTo([this.props.lat, this.props.lng])
        this.circle = L.circle([this.props.lat, this.props.lng],{
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 10
        }).addTo(this.map);
    }

    render(){
        return <Wrapper width='100%' height="300px" id="map" />
    }
}
