import React, { Component } from 'react'
import Logo from '../assets/WebLogo.png'
import './Header.css'

export default class HeaderAfter extends Component {
    state = {
        currentUrl: ''
    }

    changeUrl = (url) => {
        this.setState({ currentUrl: url })
        console.log(this.state.currentUrl)
    }

    componentDidMount() {
        console.log(window.location.pathname)
        this.changeUrl(window.location.pathname)
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <a className="navbar-brand" href="#"><img src={Logo} width="70" /></a>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn ungu my-2 my-sm-0" type="submit">Search</button>
                        </form>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Message</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        My Profile</a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Profile</a>
                                        <a className="dropdown-item" href="#">Logout</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
