import React, { Component } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';
import styled from "styled-components";
import marker from '../assets/map-marker.png'
const Wrapper = styled.div`
    width : ${props => props.width};
    height : ${props => props.height};
`;

export default class Map extends Component {
    componentDidMount(){
        this.map = L.map('map',{
            center : [this.props.lat, this.props.lng],
            zoom:17,
            zoomControl:false
        })
        let newMarker = L.icon({
            iconUrl: marker,

            iconSize:     [40, 40], // size of the icon
            iconAnchor:   [22, 22], // point of the icon which will correspond to marker's location
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        });
        L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png').addTo(this.map);
        
        // this.circle = L.circle([this.props.lat, this.props.lng],{
        //     fillOpacity: 0,
        //     radius: 0
        // }).addTo(this.map)
        L.marker([this.props.lat, this.props.lng], {icon: newMarker}).addTo(this.map);
    }

    render(){
        return <Wrapper width='100%' height="100%" id="map" />
    }
}
