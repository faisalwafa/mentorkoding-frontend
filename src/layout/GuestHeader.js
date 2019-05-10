import React, { Component } from 'react'
import Logo from '../assets/WebLogo.png'
import './Header.css'

export default class HeaderBefore extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <a className="navbar-brand" href="#"><img src={Logo} width="70" /></a>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="btn putih my-2 my-sm-0 btn-lg" href="#">Join Now</a>
                                </li>
                                <li className="nav-item">
                                    <a className="btn ungu my-2 my-sm-0 btn-lg" href="./login">Sign In</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
