import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class MeetupItems extends Component {
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
        const { mentor, student, role, _id } = this.props.meetup
        let name, photo
        if (role === "Mentor") {
            name = student.name
            photo = student.profilePic
        } else {
            name = mentor.name
            photo = mentor.profilePic
        }

        const date = this.dateFormat(this.props.meetup.date)
        return (
            <div className="col-6 my-3">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-4 text-center">
                                <img src={`http://localhost:8000/${photo}`} className="rounded-circle" width="80" height="80" alt="" />
                                {
                                    role === "Mentor" && (
                                        <Link to={`/Profile/${this.props.meetup.student._id}`}><h5 className="lead mt-4">{name}</h5></Link>
                                    )
                                }
                                {
                                    role === "Student" && (
                                        <Link to={`/Profile/${this.props.meetup.mentor._id}`}><h5 className="lead mt-4">{name}</h5></Link>
                                    )
                                }
                                {
                                    role === "Mentor" && (
                                        <div>
                                            <hr />
                                            <button className="btn btn-outline-success"
                                                onClick={this.props.onMeetupFinish.bind(this, _id)}
                                            >Finish Meetup</button>
                                        </div>
                                    )
                                }
                            </div>
                            {/* <div className="col"></div> */}
                            <div className="col mt-4">
                                <h5 className="card-text pb-3">
                                    <i className="fas fa-chalkboard-teacher"></i>
                                    <span className="pl-1">Topic:</span>
                                    <span className="pl-4">{this.props.meetup.topic}</span>
                                </h5>
                                <h5 className="card-text pb-3">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <span className="pl-2">Place:</span>
                                    <span className="pl-4">{this.props.meetup.detailPlace}</span>
                                </h5>
                                <h5 className="card-text pb-3">
                                    <i className="far fa-clock"></i>
                                    <span className="pl-2">Time:</span>
                                    <span className="pl-4">{date}, {this.props.meetup.time}</span>
                                </h5>
                                <h5 className="card-text pb-3">
                                    <i className="fas fa-graduation-cap"></i>
                                    <span className="pl-2">Role:</span>
                                    <span className="pl-4">{this.props.meetup.role}</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
