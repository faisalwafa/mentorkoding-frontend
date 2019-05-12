import React, { Component } from 'react'

export default class PortofolioItem extends Component {

    render() {
        const { id } = this.props
        return (
            <div className="card">
                <p>{this.props.project.name}</p>
                <p>{this.props.project.description}</p>
                <p>{this.props.project.linkProject}</p>
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
        )
    }
}
