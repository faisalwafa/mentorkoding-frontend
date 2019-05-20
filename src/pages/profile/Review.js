import React, { Component } from "react";
import ReviewItem from "./ReviewItem";

export default class Review extends Component {
  render() {
    return (
      <div>
        <div className="card my-4">
          <h5 className="mt-4 text-center">Review</h5>
          <div className="card-body">
            <div className="row">
              {this.props.reviews.map((review, index) => {
                return (
                  <ReviewItem
                    key={index}
                    id={index}
                    review={review}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
