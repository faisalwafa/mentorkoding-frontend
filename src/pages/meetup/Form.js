import React, { Component } from 'react'
import Map from './Map';
import axios from "axios";

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
    const position = [51.505, -0.09]
    return (
      <div>
        <div className='card mt-5' style={{
          width: '70%',
          margin: 'auto'
        }}>
          <div className='card-body'>
            <form>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Nama Mentor</label>
                <div className="col-sm-10">
                  <input type="text" name="" id="" className="form-control" placeholder="" value="Dafa Akbar" readOnly/>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Materi</label>
                <div className="col-sm-10">
                  <input type="text" name="" id="" className="form-control" placeholder="Materi yang dibahas...."/>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Tanggal</label>
                <div className="col-sm-10">
                  <input type="date" name="" id="" className="form-control" placeholder=""/>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Tempat</label>
                <div className="col-sm-7">
                  <input 
                  type="text" 
                  name="tempat" 
                  id="tempat"
                  className="form-control" 
                  placeholder="Tempat meetup...."
                  onChange={this.onChange}
                  value={this.state.tempat}
                  />                  
                </div>
                <div className="col-sm-3">
                  <button type="button" className="btn btn-primary" onClick={this.onChangeGeo}>Cari Lokasi</button>
                </div>
              </div>
              <div className='d-flex justify-content-center'>
                <Map lat={this.state.lat} lng={this.state.lng} ref="child" />
              </div>
              <hr></hr>
              <div className="row mt-5">
                <div className="col-sm-1"></div>
                <button type="button" className="btn btn-success col-sm-3">Konfirmasi</button>
                <div className="col-sm-4"></div>
                <button type="button" className="btn btn-danger col-sm-3">Cancel</button>
                <div className="col-sm-1"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
