import React, { Component } from 'react'

export default class Unconfirmed extends Component {
    render() {
        return (
            <div style={{
                backgroundColor: 'white'
            }}>
                <div className="card-body">
                    <div className="d-flex justify-content-center mb-4">
                        <h2>Unconfirmed </h2>
                    </div>
                    <hr />
                    <div className="row my-2">
                        <div className="card mx-3 my-2" style={{
                            width: "47%"
                        }}>
                            <div className="card-body row">
                                <div className="col-3 text-center">
                                    <img src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" className="rounded-circle" width="80" height="80" alt="" />

                                </div>
                                <div className="col">
                                    <h5 className="card-title">Muhammad Fakhryan Zul</h5>
                                    <p className="card-text"><i className="fas fa-map-marker-alt"></i> Polinema</p>
                                    <p className="card-text"><i className="far fa-clock"></i> 7 PM</p>
                                    <p className="card-text"><i className="fas fa-graduation-cap"></i> Sebagai Mentor</p>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="row text-center">
                                    <div className="col-6">
                                        <button className="btn btn-success" href="">Confirm</button>
                                    </div>
                                    <div className="col-6">
                                        <button className="btn btn-danger" href="">Reject</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="card mx-3 my-2" style={{
                            width: "47%"
                        }}>
                            <div className="card-body row">
                                <div className="col-3 text-center">
                                    <img src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" className="rounded-circle" width="80" height="80" alt="" />

                                </div>
                                <div className="col">
                                    <h5 className="card-title">Muhammad Fakhryan Zul</h5>
                                    <p className="card-text"><i className="fas fa-map-marker-alt"></i> Polinema</p>
                                    <p className="card-text"><i className="far fa-clock"></i> 7 PM</p>
                                    <p className="card-text"><i className="fas fa-graduation-cap"></i> Sebagai Mentor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row my-2">
                        <div className="card mx-3 my-2" style={{
                            width: "47%"
                        }}>
                            <div className="card-body row">
                                <div className="col-3 text-center">
                                    <img src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" className="rounded-circle" width="80" height="80" alt="" />

                                </div>
                                <div className="col">
                                    <h5 className="card-title">Muhammad Fakhryan Zul</h5>
                                    <p className="card-text"><i className="fas fa-map-marker-alt"></i> Polinema</p>
                                    <p className="card-text"><i className="far fa-clock"></i> 7 PM</p>
                                    <p className="card-text"><i className="fas fa-graduation-cap"></i> Sebagai Mentor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
