import React, { Component } from 'react'
import UnconfirmedItem from "./UnconfirmedItem";

export default class Unconfirmed extends Component {
    render() {
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
                                this.props.meetups.map(meetup => {
                                    return <UnconfirmedItem key={meetup.id} meetup = {meetup} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
