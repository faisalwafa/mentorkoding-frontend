import React, { Component } from 'react'
import Logo from '../assets/WebLogo2.png'
import './Header.css'
import { Link } from "react-router-dom";

export default class HeaderBefore extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <Link className="navbar-brand" to="/"><img src={Logo} alt="logo" height="30" /></Link>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="btn ungu my-2 my-sm-0 btn-lg" to="/Register">Sign Up</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="btn btn-default my-2 my-sm-0 btn-lg" to="/Login">Sign In</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
