import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Map from '../../layout/Map'

export default class IncomingMeetup extends Component {
  render() {
      console.log(this.props.meetup)
    return (
    //   <div>
        <div className="card h-100">
            <div className="card-body">
                <h2 className="text-center">Incoming Meetup</h2>
                <hr/>
                <div className="row">
                    <div className="col-3 text-center">
                        <img src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" className="rounded-circle" width="80" height="80" alt="" />
                        <h5 className="lead mt-4">{this.props.meetup.name}</h5>
                    </div>
                    <div className="col-5 mt-4 border-right">
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
                    <div className="col d-flex flex-column align-items-center justify-content-center">
                        <Map lat={this.props.meetup.lat} lng={this.props.meetup.lng} />
                    </div>
                </div>
            </div>
        </div>
    //   </div>
    )
  }
}
