import React, { Component } from 'react'

export default class Headline extends Component {
    render() {
        return (
            <div>
                <div className="card" style={{
                    height: '250px'
                }}>
                    <div className="card-body d-flex align-items-center justify-content-center">
                        <div className="text-center">
                            <img src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" className="rounded-circle" width="120" height="120" alt="" />
                            <h4 className="mt-4">{this.props.nama}</h4>
                            <h6 className="text-secondary">{this.props.headline}</h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
