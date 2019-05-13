import React, { Component } from 'react'

export default class EducationItem extends Component {

    dateFormat = (date) => {
        let d = new Date(date)
        let day = d.getDate()
        let month = d.getMonth() + 1
        if (day < 10) {
            day = `0${day}`
        }
        if (month < 10) {
            month = `0${month}`
        }
        return `${d.getFullYear()}-${month}-${day}`
    }

    render() {
        const { id } = this.props
        let dateIn = this.dateFormat(this.props.education.dateIn)
        let dateOut = this.dateFormat(this.props.education.dateOut)
        return (
            <div className="col-6">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <h5><strong>{this.props.education.name}</strong></h5>
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
                        <h5 className="text-muted">{dateIn} - {dateOut}</h5>
                    </div>
                </div>
            </div>
        )
    }
}
