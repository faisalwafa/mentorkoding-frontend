import React, { Component } from 'react'
import UnconfirmedItem from "./UnconfirmedItem";

export default class Unconfirmed extends Component {
    render() {
        let mentorUnconfirmed = this.props.meetups.filter(meetup => meetup.role === "Mentor")
        return (
            <div style={{
                backgroundColor: 'white'
            }}>
                <div className="card-body">
                    <div className="d-flex justify-content-center mb-4">
                        <h2>Meetup Waiting List </h2>
                    </div>
                    <hr />
                    <div>
                        <div className="row">
                            {
                                mentorUnconfirmed.map(meetup => {
                                    return <UnconfirmedItem key={meetup._id} meetup= {meetup} id={meetup._id} onMeetupAccept={this.props.onMeetupAccept} onMeetupDecline={this.props.onMeetupDecline}/>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
