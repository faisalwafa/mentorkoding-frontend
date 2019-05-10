import React, { Component } from 'react'
import Header from '../../layout/Header'
import './Homepage.css'
import Image from '../../assets/lesson.png'
import Mentor from '../../assets/mentor.png'
import { Link } from "react-router-dom";

export default class Homepage extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="title">
                                <h3 className="font-title">Mentor Koding</h3>
                            </div>
                            <hr className="divider"/>
                            <h2 className="text-white text-right mr-5">Find your mentor</h2>
                            <h2 className="text-white text-right mr-5">Master the skill you want to learn</h2>
                            {/* <div className="mt-5">
                                <input className=" search form-control-lg " type="search" placeholder="Find your mentor here" aria-label="Search" /><br />
                            </div> */}
                            <h2 className="text-white title mb-3 text-right mr-5">Let's Join Now</h2>
                            <div className="text-right mr-5 mt-3">
                            <Link className="btn btn-light my-2 my-sm-0 btn-lg mr-4 btn-huge" to="/Register">Sign Up</Link>
                            <Link className="btn btn-outline-light my-2 my-sm-0 btn-lg btn-huge" to="/Login">Sign In</Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img className="headline-image" src={Image} alt="headline image" width="100%" />
                        </div>
                    </div>
                    <div className="card mt-60">
                        <div className="row text-center my-5 mx-4">
                            <div className="col-md-4">
                                <h1 className="mb-4 text-ungu"><i className="fas fa-tools"></i></h1>
                                <h5>Input the skill you want to learn</h5>
                            </div>
                            <div className="col-md-4">
                                <h1 className="mb-4 text-ungu"><i className="fas fa-users"></i></h1>
                                <h5>Find your mentor and organize the meetup</h5>
                            </div>
                            <div className="col-md-4">
                                <h1 className="mb-4 text-ungu"><i className="fas fa-book-open"></i></h1>
                                <h5>Learn and master the skill with your mentor</h5>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <div className="row">
                            <div className="col">
                                <img className="headline-image" src={Mentor} alt="image mentor" width="90%" />
                            </div>
                            <div className="col-md-6">
                                <div className="title">
                                    <h4 className="font-subtitle">Have Already Mastered some Skills?</h4>
                                    <hr className="divider divider-full"/>
                                    <h2 className="text-white text-left mr-5 mt-4">Help others developing their skills</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="divider"/>
                    <div className="my-5 text-center">
                        <h1 className="bold my-2 mb-5 text-white">Register Now</h1>
                        <div className="mt-4">
                            <Link className="btn btn-light my-2 my-sm-0 btn-lg mr-4 btn-humongous" to="/Register">Sign Up</Link>
                            <Link className="btn btn-outline-light my-2 my-sm-0 ml-4 btn-lg btn-humongous" to="/Login">Sign In</Link>
                        </div>
                    </div>
                </div>
                <div className="card text-center" style={{
                    backgroundColor:"#4568DC"
                }}>
                    <div className="card-body">
                        <h6 className="text-white">Copyright&copy;2018</h6>
                    </div>
                </div>
            </div>
        )
    }
}
