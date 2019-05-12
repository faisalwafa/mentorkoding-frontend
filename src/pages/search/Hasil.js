import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Hasil extends Component {
  render() {
    return (
      <div className='mt-5'>
        <div className='card' style={{
            // height :'180px',
            width  :'50%',
            margin:'auto'
        }}>
            <div className='card-body row'>
                <div className='col-4 text-center border-right'>
                    <img src='https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg' className='rounded-circle mb-3' width='100' height='100' alt='Photo Profile' />
                    <div className='my-2'>
                        <h5 className='card-title'>{this.props.nama}</h5>
                    </div>
                </div>
                <div className='col-8'>
                    <div className='my-auto'>
                        <p className='card-text'><i className='fas fa-tools'></i>
                          <b className="pl-2"> Skills:</b>  
                          <span className="pl-4">
                            {this.props.skills.map((skill, index) => {
                              if (index === 0) {
                                return <span>{skill}</span>  
                              }
                              return <span>, {skill}</span>
                            })}
                          </span>
                        </p>
                        <p className='card-text'><i className='fas fa-building'></i>
                          <b className="pl-2">Job:</b>  
                          <span className="pl-5">{this.props.job}</span>
                        </p>
                        <p className='card-text'><i className='fas fa-map-marker-alt'></i>
                          <b className="pl-1"> Address:</b>  
                          <span className="pl-3">{this.props.address}</span>
                        </p>
                    </div>
                    <div className='text-right'>
                        <Link to={{
                          pathname: `/Profile/${this.props.id}`
                        }} className='btn btn-outline-success mt-4'>Lihat Profil</Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
