import React, { Component } from 'react'

export default class Message extends Component {
  render() {
    return (
      <div>
        <div className="card" style={{
            height:'600px'
        }}> 
            <div className="d-flex justify-content-center mt-3">
                <h4>Faisal Wafa</h4>
            </div>
            <hr/>
            <div className='row'>
                <div className="col-6">
                    <div className="row">
                        <div className='col-3'>
                                <img src='https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg' className='rounded-circle' width='30' height='30' alt='Photo Profile'/>
                            </div>
                            <div className="col-9">
                                <p>ayam</p>
                            </div> 
                        </div>
                    </div>
                    
                <div className="col-6">
                        
                </div>
                
            </div>
        </div>
    </div>
    )
  }
}
