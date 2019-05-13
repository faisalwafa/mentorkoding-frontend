import React, { Component } from 'react'

export default class PortofolioItem extends Component {

    render() {
        const { id } = this.props
        return (
            <div className="col-6">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <h5><strong>{this.props.project.name}</strong></h5>
                            </div>
                            {
                                this.props.user ?
                                <div className="col-md-2 text-right">
                                    <div className="dropdown">
                                        <button className="btn btn-light" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-ellipsis-v"></i>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown-item text-danger" href="#" style={{
                                                cursor: "pointer"
                                            }} onClick={this.props.onDelete.bind(this, id)}><i className="far fa-trash-alt pr-4"></i> Delete</li>
                                        </ul>
                                    </div>  
                                </div>
                                : ''
                            }
                        </div>
                        <p>{this.props.project.description}</p>
                        <hr/>
                        <a className="btn btn-gradient" href={this.props.project.linkProject} target="_blank">See Project</a>
                    </div>
                </div>
            </div>
        )
    }
}
