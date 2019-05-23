import React, { Component } from 'react'
import axios from 'axios'
import { apiEndpoint } from "../../../helper/helper";
import { Link } from "react-router-dom";

export default class HistoryItem extends Component {
    state = {
        review: ""
    }

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


    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    handleChange = (e) => {
        e.preventDefault()
        axios
            .get(`${apiEndpoint}/api/v1/users/${this.props.meetup.mentor._id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("authToken")}`
                }
            })
            .then(response => {
                const { data } = response
                let reviews = data.reviews
                let newReview = {
                    user: this.props.id,
                    review: this.state.review
                }
                reviews.push(newReview)
                return axios.put(`${apiEndpoint}/api/v1/users/${this.props.meetup.mentor._id}`, {
                    reviews
                }, {
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem("authToken")}`
                        }
                    })
            })
            .then(response => {
                console.log("berhasil")
            })
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
                                    role === "Student" && (
                                        <div>
                                            <hr />
                                            <button className="btn btn-outline-success" data-toggle="modal" data-target="#ReviewMentor"
                                            >Review Meetup</button>
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
                                    <span className="pl-4">{this.props.meetup.time}</span>
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

                <div className="modal fade" id="ReviewMentor" tabIndex="-1" role="dialog" >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Review Mentor</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form onSubmit={this.handleChange}>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <textarea type="text-area"
                                            name="review"
                                            value={this.state.review}
                                            onChange={this.onChange}
                                            className="form-control"
                                            placeholder="Description">
                                        </textarea>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
