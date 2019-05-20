import React, { Component } from 'react'
import Map from '../../layout/Map'

export default class IncomingMeetup extends Component {
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
      let name,photo
      if (role === "Mentor") {
          name = student.name
          photo = student.profilePic
      } else {
          name = mentor.name
          photo = mentor.profilePic
      }

      const date = this.dateFormat(this.props.meetup.date)

    return (
    //   <div>
        <div className="card h-100">
            <div className="card-body">
                <h2 className="text-center">Incoming Meetup</h2>
                <hr/>
                <div className="row">
                    <div className="col-3 text-center">
                        <img src={`http://localhost:8000/${photo}`} className="rounded-circle" width="80" height="80" alt="" />
                        <h5 className="lead mt-4">{name}</h5>
                        {
                            role === "Mentor" && (
                                <div>
                                    <hr/>
                                    <button className="btn btn-outline-success" 
                                    onClick={this.props.onMeetupFinish.bind(this, _id)}
                                    >Finish Meetup</button>
                                </div>
                            )
                        }
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
