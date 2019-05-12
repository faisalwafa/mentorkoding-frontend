import React, { Component } from 'react'

export default class EducationItem extends Component {

    render() {
        const { id } = this.props
        return (
            <div className="card">
                <p>{this.props.education.name}</p>
                <p>{this.props.education.dateIn}</p>
                <p>{this.props.education.dateOut}</p>
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
