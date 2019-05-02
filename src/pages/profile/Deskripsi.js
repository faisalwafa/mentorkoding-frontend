import React, { Component } from 'react'

export default class Deskripsi extends Component {
    render() {
        return (
            <div>
                <div className="card text-center my-5">
                    <div className="card-body">
                        <img src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" className="rounded-circle" width="100" height="100" />
                        <h4 className="mt-4">{this.props.name}</h4>
                        <h4 className="font-weight-light">{this.props.description}</h4>
                    </div>
                </div>
            </div>
        )
    }
}
