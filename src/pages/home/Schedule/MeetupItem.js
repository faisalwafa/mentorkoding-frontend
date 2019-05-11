import React, { Component } from 'react'

export default class MeetupItems extends Component {
  render() {
    return (
        <div className="col-6 my-3">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-3 text-center">
                            <img src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" className="rounded-circle" width="80" height="80" alt="" />
                            <h5 className="lead mt-4">{this.props.meetup.name}</h5>
                        </div>
                        <div className="col mt-4">
                            <h5 className="card-text pb-3">
                                <i className="fas fa-chalkboard-teacher"></i>
                                <span className="pl-1">Topic:</span>
                                <span className="pl-4">{this.props.meetup.topic}</span>
                            </h5>
                            <h5 className="card-text pb-3">
                                <i className="fas fa-map-marker-alt"></i> 
                                <span className="pl-2">Place:</span>
                                <span className="pl-4">{this.props.meetup.place}</span>
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
        </div>
    )
  }
}
