import React, { Component } from 'react'
import Header from '../../layout/Header'
import './Homepage.css'
import Image from '../../assets/lesson.png'

export default class Homepage extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className=" container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="title">
                                <h1 className="font-title">Learn To Code Now</h1>
                            </div>
                            <div className="title">
                                <input className=" search form-control-lg " type="search" placeholder="Find your mentor here" aria-label="Search" /><br />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img className="headline-image" src={Image} width="100%" />
                        </div>
                    </div>
                    <div className="card row skill-section">
                        <div className="col-md-6">
                            <div className="skill-text">
                                <h2 className="skill-title">Temukan skill yang ingin kamu pelajari</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="skill-list">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
