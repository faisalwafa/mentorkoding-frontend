import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Headline extends Component {
    render() {
        return (
            // <div>
                <div className="card h-100">
                    <div className="card-body">
                        <div className="d-flex align-items-center justify-content-center">
                            <div className="text-center">
                                <img src={`http://localhost:8000/${this.props.profilePic}`} className="rounded-circle" height="80" width="80" alt="" />
                                <h4 className="mt-4">{this.props.name}</h4>
                                <h6 className="text-secondary">{this.props.username}</h6>
                            </div>
                        </div>
                        <hr/>
                        <div className="text-center">
                            <Link to={{
                                pathname:`/Profile/${this.props.id}`,
                            }} className="btn btn-primary">
                                View Profile
                            </Link>
                        </div>
                    </div>
                </div>
            // </div>
        )
    }
}
