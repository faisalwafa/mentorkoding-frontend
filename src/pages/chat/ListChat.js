import React, { Component } from 'react'
import CariChat from './CariChat';
import OrangChat from './OrangChat';

export default class ListChat extends Component {
  render() {
    return (
        <div>
            <div className="card" style={{
                height:'600px'
            }}> 
                <div className='card-body align-item-center'>
                    <CariChat />
                    <OrangChat />
                </div>
            </div>
        </div>
    )
  }
}
