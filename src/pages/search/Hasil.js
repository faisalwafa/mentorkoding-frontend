import React, { Component } from 'react'

export default class Hasil extends Component {
  render() {
    return (
      <div className='mt-5'>
        <div className='card' style={{
            height :'180px',
            width  :'50%',
            margin:'auto'
        }}>
            <div className='card-body row'>
                <div className='col-3'>
                    <img src='https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg' className='rounded-circle' width='100' height='100' alt='Photo Profile' />
                    <div className='text-center my-2'>
                        <h6 className='card-title'>{this.props.nama}</h6>
                    </div>
                </div>
                <div className='col-1'></div>
                <div className='col-8'>
                    <div className='my-auto'>
                        <p className='card-text'><i class='fas fa-tools'></i><b> Keahlian </b> : {this.props.skills.map(skill => {
                          return <span>{skill} </span>
                        })}</p>
                        <p className='card-text'><i class='fas fa-building'></i><b> Instansi</b> : {this.props.instansi}</p>
                    </div>
                    <hr/>
                        <div className='text-right'>
                            <button type='button' class='btn btn-outline-success'>Lihat Profil</button>
                        </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
