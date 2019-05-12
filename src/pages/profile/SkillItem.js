import React, { Component } from 'react'

export default class SkillItem extends Component {
    render() {
        // const id = this.props.id
        const { id } = this.props
        return (
            <div className="col-6">
                <div className="my-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-10">
                                    <h6 style={{
                                        fontSize: "1.1rem"
                                    }} className="card-text">{this.props.skill}</h6>
                                </div>
                                <div className="col-2">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
