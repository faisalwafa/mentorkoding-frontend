import React, { Component } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';
import styled from "styled-components";
import marker from '../../assets/map-marker.png'

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

        this.newMarker = L.icon({
            iconUrl: marker,

            iconSize:     [40, 40], // size of the icon
            iconAnchor:   [22, 22], // point of the icon which will correspond to marker's location
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        });
        
        this.marker = L.marker([this.props.lat, this.props.lng], {icon: this.newMarker}).addTo(this.map)
    }

    updateMap=()=>{
        this.map.removeLayer(this.marker)
        this.map.panTo([this.props.lat, this.props.lng])
        this.marker = L.marker([this.props.lat, this.props.lng], {icon: this.newMarker}).addTo(this.map)
    }

    render(){
        return <Wrapper width='100%' height="300px" id="map" />
    }
}
