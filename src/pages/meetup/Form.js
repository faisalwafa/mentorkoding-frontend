import React, { Component } from 'react'
import Map from './Map';
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { apiEndpoint } from "../../helper/helper";

export default class Form extends Component {

  constructor(props){
    super(props)
    this.state = {
      detailPlace : "",
      lat : "",
      lng : "",
      mentor: props.profile.id,
      date: "",
      topic: "",
      time: "",
      isRedirected: false
    }
  }

  onChangeGeo = (e) => {
    this.setState({[e.target.name]:e.target.value})
    axios.get('https://api.opencagedata.com/geocode/v1/json', {
      params: {
        q: this.state.detailPlace,
        key: "f9b026877ce44f8f8c86972b47dde98d"
      }
    })
      .then(async response => {
        await this.setState({
          lat: response.data.results[0].geometry.lat,
          lng: response.data.results[0].geometry.lng
        })
        this.refs.child.updateMap()
      })
      .catch(err => console.log(err))
  }
  
  
  onChange = (e) => this.setState({[e.target.name]:e.target.value});

  onSubmit = (e) => {
    e.preventDefault()
    axios.post(`${apiEndpoint}/api/v1/meetups`,{
      detailPlace : this.state.detailPlace,
      lat : this.state.lat,
      lng : this.state.lng,
      mentor: this.state.mentor,
      date: this.state.date,
      topic: this.state.topic,
      time: this.state.time,
    },
    {
      headers: {
          'Authorization': `Bearer ${localStorage.getItem("authToken")}`
    }
    }).then(meetup => {
      this.setState({
        isRedirected: true
      })
    })
  }

  render() {
    return (
      <div>
        <div className='card mt-5' style={{
          width: '60%',
          margin: 'auto'
        }}>
          <div className='card-body p-5'>
            <h2 className="text-center">Organize Meetup</h2>
            <hr/>
            <form onSubmit={this.onSubmit}>
              <div className="form-group row mb-4">
                <label className="col-sm-3 col-form-label"><h5>Mentor Name :</h5></label>
                <div className="col-sm-9">
                  <input type="text" name="" id="" className="form-control form-control-lg" placeholder="" value={this.props.profile.name} readOnly/>
                </div>
              </div>
              <div className="form-group row mb-4">
                <label className="col-sm-3 col-form-label"><h5>Topic :</h5></label>
                <div className="col-sm-9">
                  <input 
                    type="text" 
                    name="topic" 
                    id="topic" 
                    className="form-control form-control-lg"
                    onChange={this.onChange}
                    value={this.state.topic}
                    placeholder="Topic"
                    />
                </div>
              </div>
              <div className="form-group row mb-4">
                <label className="col-sm-3 col-form-label"><h5>Date :</h5></label>
                <div className="col-sm-9">
                  <input 
                  type="date" 
                  name="date" 
                  id="date" 
                  className="form-control form-control-lg"
                  onChange={this.onChange}
                  value={this.state.date}
                  placeholder="date"/>
                </div>
              </div>
              <div className="form-group row mb-4">
                <label className="col-sm-3 col-form-label"><h5>Time :</h5></label>
                <div className="input-group date col-sm-9">
                    <input 
                    type="time" 
                    className="form-control form-control-lg"
                    name="time"
                    id="time"
                    onChange={this.onChange}
                    value={this.state.time}
                    />
                    <div className="input-group-append">
                        <div className="input-group-text"><i className="fas fa-clock"></i></div>
                    </div>
                </div>
              </div>
              <div className="form-group row mb-4">
                <label className="col-sm-3 col-form-label"><h5>Place :</h5></label>
                <div className="col">
                  <input 
                  type="text" 
                  name="detailPlace" 
                  id="detailPlace"
                  className="form-control form-control-lg" 
                  placeholder="Detail Place"
                  onChange={this.onChange}
                  value={this.state.detailPlace}
                  />                  
                </div>
                <div className="col-sm-3">
                  <button type="button" className="btn btn-primary h-100" onClick={this.onChangeGeo}>Find Location</button>
                </div>
              </div>
              <div className='d-flex justify-content-center'>
                <Map lat={this.state.lat} lng={this.state.lng} ref="child" />
              </div>
              <hr></hr>
              <div>
                <div className="text-center">
                  <button type="submit" className="btn btn-success btn-lg">Create Meetup</button>
                </div>
                <div className="text-right">
                  <Link className="btn btn-secondary btn" to="/Home">Cancel</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
        { this.state.isRedirected && <Redirect to="/Home" /> }
      </div>
    )
  }
}
