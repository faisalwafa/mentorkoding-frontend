import React, { Component } from 'react'
import Map from './Map';
import axios from "axios";
import { Link } from "react-router-dom";

export default class Form extends Component {

  state = {
    tempat : " ",
    lat : " ",
    lng : " "
  }

  onChangeGeo = (e) => {
    this.setState({[e.target.name]:e.target.value})
    axios.get('https://api.opencagedata.com/geocode/v1/json', {
      params: {
        q: this.state.tempat,
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
  }
  
  
  onChange = (e) => this.setState({[e.target.name]:e.target.value});

  render() {
    return (
      <div>
        <div className='card mt-5' style={{
          width: '60%',
          margin: 'auto'
        }}>
          <div className='card-body p-5'>
            <form>
              <div className="form-group row mb-4">
                <label className="col-sm-3 col-form-label">Nama Mentor :</label>
                <div className="col-sm-9">
                  <input type="text" name="" id="" className="form-control form-control-lg" placeholder="" value="Daffa Akbar" readOnly/>
                </div>
              </div>
              <div className="form-group row mb-4">
                <label className="col-sm-3 col-form-label">Materi :</label>
                <div className="col-sm-9">
                  <input type="text" name="" id="" className="form-control form-control-lg" placeholder="Materi yang dibahas...."/>
                </div>
              </div>
              <div className="form-group row mb-4">
                <label className="col-sm-3 col-form-label">Tanggal :</label>
                <div className="col-sm-9">
                  <input type="date" name="" id="" className="form-control form-control-lg" placeholder=""/>
                </div>
              </div>
              <div className="form-group row mb-4">
                <label className="col-sm-3 col-form-label">Tempat :</label>
                <div className="col">
                  <input 
                  type="text" 
                  name="tempat" 
                  id="tempat"
                  className="form-control form-control-lg" 
                  placeholder="Tempat meetup...."
                  onChange={this.onChange}
                  value={this.state.tempat}
                  />                  
                </div>
                <div className="col-sm-3">
                  <button type="button" className="btn btn-primary h-100" onClick={this.onChangeGeo}>Cari Lokasi</button>
                </div>
              </div>
              <div className='d-flex justify-content-center'>
                <Map lat={this.state.lat} lng={this.state.lng} ref="child" />
              </div>
              <hr></hr>
              <div>
                <div className="text-center">
                  <button type="button" className="btn btn-success btn-lg">Konfirmasi</button>
                </div>
                <div className="text-right">
                  <Link className="btn btn-secondary btn" to="/Home">Cancel</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
