import React, { Component } from 'react'

export default class Loading extends Component {
  render() {
    return (
        <div className="card my-5">
            <div className="card-body">
                <div className="text-center">
                    <div className="spinner-border" style={{
                        width: '2rem', 
                        height: '2rem'
                    }} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
