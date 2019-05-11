import React, { Component } from 'react'
import Header from "../../layout/Header";
import Headline from "./Headline";
import Jadwal from "./Schedule/Jadwal";
import Unconfirmed from "./UnconfirmedMeetups/Unconfirmed";
import axios from 'axios';
import { Link } from "react-router-dom";
import IncomingMeetup from './IncomingMeetup';

export default class Home extends Component {
    state = {
        nama: "Milos",
        headline: "Penari",
        meetups: [
            {
                id: 1,
                name: "Daffa",
                topic: "Javascript",
                place: "Politeknik Negeri Malang",
                time: Date.now(),
                role: "Mentor",
                isConfirmed: false,
                lat: -7.947334000000007,
                lng: 112.61548500000004
            },
            {
                id: 2,
                name: "Akbar",
                topic: "Javascript",
                place: "Universitas Brawijaya",
                time: Date.now(),
                role: "Mentor",
                isConfirmed: true,
                lat: -7.947334000000007,
                lng: 112.61548500000004
            },
            {
                id: 3,
                name: "Dwiputra",
                topic: "Javascript",
                place: "Ngopa Ngopi",
                time: Date.now(),
                role: "Student",
                isConfirmed: true,
                lat: -7.947334000000007,
                lng: 112.61548500000004
            },
            {
                id: 4,
                name: "Damar",
                topic: "Javascript",
                place: "Seven Chicken",
                time: Date.now(),
                role: "Mentor",
                isConfirmed: true,
                lat: -7.947334000000007,
                lng: 112.61548500000004
            },
            {
                id: 5,
                name: "Riyanto",
                topic: "Javascript",
                place: "Studio Bakso",
                time: Date.now(),
                role: "Student",
                isConfirmed: false,
                lat: -7.947334000000007,
                lng: 112.61548500000004
            }
        ]
    }

    componentDidMount() {
        console.log("this will be api call")
    }

    render() {
        const confirmedMeetup = this.state.meetups.filter(meetup => meetup.isConfirmed)
        const unconfirmedMeetup = this.state.meetups.filter(meetup => !meetup.isConfirmed)
        const incomingMeetup = confirmedMeetup[0]
        const laterMeetups = confirmedMeetup
        laterMeetups.splice(0,1)
        const meetupSchedule = laterMeetups
        return (
            <div>
                <Header />
                <div className="container mt-5">
                    <div className="card mb-4">
                        <div className="card-body text-center">
                            <h5 className="card-text">Want to learn some new skills? Find a Mentor Now! <Link to="/Search" className="btn btn-lg ungu ml-4">Search Mentor</Link></h5>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="row">
                            <div className="col-md-3">
                                <Headline
                                    nama={this.state.nama}
                                    headline={this.state.headline}
                                />
                            </div>
                            <div className="col">
                                <IncomingMeetup meetup={incomingMeetup}/>
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
                                    <Jadwal meetups={meetupSchedule} />
                                </div>
                                <div 
                                    className="tab-pane fade" 
                                    id="pills-unconfirmed" 
                                    role="tabpanel" 
                                    aria-labelledby="pills-unconfirmed-tab">
                                    <Unconfirmed meetups={unconfirmedMeetup} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
