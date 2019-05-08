import React, { Component } from 'react'

export default class OrangChat extends Component {
  render() {
    return (
      <div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item mb-1">
                <div className="card">
                    <div className="card-body row">
                        <div className="col-3 d-flex justify-content-center">
                            <img src='https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg' className='rounded-circle' className="rounded-circle" style={{
                                maxWidth:"45px",
                                maxHeight:"45px"
                            }} />
                        </div>
                        <div className="col" style={{
                                    overflow:'hidden'
                                }}>
                                <div class="card-title" style={{
                                    fontWeight:"bold",
                                    fontSize:'15px',
                                    textOverflow:'ellipsis',
                                    whiteSpace: 'nowrap',
                                    overflow:'hidden'
                                }}>Faisal Wafa</div>
                                <p className="card-text" style={{
                                    textOverflow:'ellipsis',
                                    whiteSpace: 'nowrap',
                                    overflow:'hidden'
                                }}>Ketemu dimana mas ?</p>
                            </div>
                    </div>
                </div>
            </li>
        </ul>
      </div>
    )
  }
}
