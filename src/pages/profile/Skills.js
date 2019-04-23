import React, { Component } from 'react'

export default class Skills extends Component {
    render() {
        return (
            <div>
                <div className="card my-4 text-center">
                    <h5 className=" mt-4">Keahlian yang Dimiliki</h5>
                    <div className="card-body ">
                        <div className="row">
                            <div className="col-12">
                                <div className="card my-1">
                                    <div className="mt-3 ml-4">
                                        <p>React Native</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="card my-1">
                                    <div className="mt-3 ml-4">
                                        <p>React</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="card my-1">
                                    <div className="mt-3 ml-4">
                                        <p>Node.js</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
