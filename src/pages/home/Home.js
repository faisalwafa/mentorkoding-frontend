import React, { Component } from 'react'
import Header from "../../layout/Header";
import Headline from "./Headline";
import Jadwal from "./Schedule/Jadwal";
import Unconfirmed from "./UnconfirmedMeetups/Unconfirmed";
import axios from 'axios';
import { Link } from "react-router-dom";
import IncomingMeetup from './IncomingMeetup';
import Loading from '../../layout/Loading'
import { apiEndpoint } from "../../helper/helper";

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            loading: false,
            unconfirmedMeetup: [],
            incomingMeetup: [],
            meetupSchedule: []
        }
    }

    componentDidMount() {
        axios.get(`${apiEndpoint}/api/v1/users/profile`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("authToken")}`
            }
        })
            .then(async response => {
                await this.setState({
                    user: response.data,
                })
                return axios.get(`${apiEndpoint}/api/v1/meetups`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("authToken")}`
                    }
                })
            })
            .then(response => {
                this.organizeMeetup(response.data)
            })
    }

    onMeetupAccept = async (id) => {
        await this.setState({
            loading: false
        })
        axios.put(`${apiEndpoint}/api/v1/meetups/${id}`, {
            isConfirmed: true
        } ,{
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("authToken")}`
            }
        })
        .then(() => {
            return axios.get(`${apiEndpoint}/api/v1/meetups`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("authToken")}`
                }
            })
        })
        .then(response => {
            this.organizeMeetup(response.data)
        })
    }

    onMeetupDecline = async (id) => {
        await this.setState({
            loading: false
        })
        axios.delete(`${apiEndpoint}/api/v1/meetups/${id}`,{
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("authToken")}`
            }
        })
        .then(() => {
            return axios.get(`${apiEndpoint}/api/v1/meetups`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("authToken")}`
                }
            })
        })
        .then(response => {
            this.organizeMeetup(response.data)
        })
    }

    onMeetupFinish = async (_id) => {
        await this.setState({
            loading: false
        })
        axios.put(`${apiEndpoint}/api/v1/meetups/${_id}`, {
            isFinished: true
        } ,{
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("authToken")}`
            }
        })
        .then(() => {
            return axios.get(`${apiEndpoint}/api/v1/meetups`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("authToken")}`
                }
            })
        })
        .then(response => {
            this.organizeMeetup(response.data)
        })
    }

    organizeMeetup = async (data) => {
        let meetups = data
        meetups.forEach(meetup => {
            if (meetup.mentor._id === this.state.user._id) {
                meetup.role = "Mentor"
            } else {
                meetup.role = "Student"
            }
        })
        let confirmedMeetup = meetups.filter(meetup => meetup.isConfirmed)
        let unconfirmedMeetup = meetups.filter(meetup => !meetup.isConfirmed)
        let incomingMeetup = confirmedMeetup[0]
        let laterMeetups = confirmedMeetup
        laterMeetups.splice(0,1)
        let meetupSchedule = laterMeetups
        await this.setState({
            unconfirmedMeetup,
            incomingMeetup,
            meetupSchedule,
            loading: true
        })
    }

    checkUnconfirmedRole = () => {
        let meetups = this.state.unconfirmedMeetup.filter(meetup => meetup.role === "Mentor")
        return meetups.length !== 0
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container mt-5">
                    {
                        this.state.loading ? (
                            <div>
                                <div className="card mb-4">
                                    <div className="card-body text-center">
                                        <h5 className="card-text">Want to learn some new skills? Find a Mentor Now! <Link to="/Search" className="btn btn-lg ungu ml-4">Search Mentor</Link></h5>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <Headline
                                                id={this.state.user._id}
                                                name={this.state.user.name}
                                                username={this.state.user.username}
                                                profilePic={this.state.user.profilePic}
                                            />
                                        </div>
                                        <div className="col">
                                            {
                                                this.state.incomingMeetup ? <IncomingMeetup meetup={this.state.incomingMeetup} onMeetupFinish={this.onMeetupFinish}/> :
                                                <div className="card h-100">
                                                    <div className="card-body">
                                                        <div className="d-flex justify-content-center align-items-center h-100">
                                                            <h3>No Incoming Meetup Found</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="card mb-5">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-center">
                                            <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                                <li className="nav-item mr-3">
                                                    <a 
                                                        className="nav-link active" 
                                                        id="pills-confirmed-tab" 
                                                        data-toggle="pill" 
                                                        href="#pills-confirmed" 
                                                        role="tab"
                                                        aria-controls="confirmed" 
                                                        aria-selected="true"
                                                        ><h5>Meetup List</h5>
                                                    </a>
                                                </li>
                                                <li className="nav-item ml-3">
                                                    <a 
                                                        className="nav-link" 
                                                        id="pills-unconfirmed-tab" 
                                                        data-toggle="pill" 
                                                        href="#pills-unconfirmed" 
                                                        role="tab"
                                                        aria-controls="unconfirmed" 
                                                        aria-selected="false"
                                                        ><h5>Meetup Wait List</h5>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <hr/>
                                        <div className="tab-content" id="pills-tabContent">
                                            <div 
                                                className="tab-pane fade show active" 
                                                id="pills-confirmed" 
                                                role="tabpanel" 
                                                aria-labelledby="pills-confirmed-tab">
                                                {
                                                    this.state.meetupSchedule.length !== 0 ? <Jadwal meetups={this.state.meetupSchedule} onMeetupFinish={this.onMeetupFinish}/> : 
                                                        <div className="d-flex justify-content-center align-items-center h-100 my-5">
                                                            <h3 className="py-5">No Other Meetup Schedule</h3>
                                                        </div>
                                                }
                                            </div>
                                            <div 
                                                className="tab-pane fade" 
                                                id="pills-unconfirmed" 
                                                role="tabpanel" 
                                                aria-labelledby="pills-unconfirmed-tab">
                                                {
                                                    this.checkUnconfirmedRole() ?
                                                    <Unconfirmed id={this.state.user._id} meetups={this.state.unconfirmedMeetup} onMeetupAccept={this.onMeetupAccept} onMeetupDecline={this.onMeetupDecline} /> :
                                                    <div className="d-flex justify-content-center align-items-center h-100 my-5">
                                                        <h3 className="py-5">No Unconfirmed Meetups</h3>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : <Loading />
                    }
                </div>
            </div>
        )
    }
}
