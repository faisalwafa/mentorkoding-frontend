import React, { Component } from "react";

export default class ReviewItem extends Component {
  render() {
    return (
      <div className="col-6">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <img
                  src={`http://localhost:8000/${this.props.profilePic}`}
                  className="rounded-circle"
                  width="50"
                  height="50"
                />
              </div>
              <div className="col-10">
                <h6 className="card-title"><b>{ this.props.review.user.name }</b></h6>
                <p className="card-text">{ this.props.review.review }</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
