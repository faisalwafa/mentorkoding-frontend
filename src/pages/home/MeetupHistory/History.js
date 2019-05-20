import React, { Component } from 'react'
import HistoryItem from './HistoryItem';

export default class History extends Component {
    render() {
        return (
            <div style={{
                backgroundColor: 'white'
            }}>
                <div className="card-body">
                    <div className="d-flex justify-content-center mb-4">
                        <h2>Meetup History</h2>
                    </div>
                    <hr />
                    <div>
                        <div className="row">
                            {
                                this.props.meetups.map(meetup => {
                                    return <HistoryItem key={meetup._id} meetup={meetup} id={this.props._id} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
