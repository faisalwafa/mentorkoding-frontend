import React, { Component } from 'react'
import MeetupItem from './MeetupItem';

export default class Jadwal extends Component {
    render() {
        return (
            <div style={{
                backgroundColor: 'white'
            }}>
                <div className="card-body">
                    <div className="d-flex justify-content-center mb-4">
                        <h2>Meetup Schedule</h2>
                    </div>
                    <hr/>
                    <div>
                        <div className="row">
                            {
                                this.props.meetups.map(meetup => {
                                    return <MeetupItem key={meetup._id} onMeetupFinish={this.props.onMeetupFinish} meetup = {meetup} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
