import React, { Component } from 'react'

export default class SkillItem extends Component {
    render() {
        // const id = this.props.id
        const { id } = this.props
        return (
            <div className="col-6">
                <div className="card my-1">
                    <div className="my-3">
                        <div className="row">
                            <div className="col-10">
                                <p>{this.props.skill}</p>
                            </div>
                            <div className="col-2">
                                <div class="dropdown">
                                    <button class="btn btn-light" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fas fa-ellipsis-v"></i>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li class="dropdown-item text-danger" href="#" style={{
                                            cursor: "pointer"
                                        }} onClick={this.props.onDelete.bind(this, id)}><i class="far fa-trash-alt pr-4"></i> Delete</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
