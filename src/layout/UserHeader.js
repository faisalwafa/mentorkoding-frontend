import React, { Component } from 'react'
import Logo from '../assets/WebLogo2.png'
import './Header.css'
import { Link } from "react-router-dom";
import axios from "axios";
import { apiEndpoint } from "../helper/helper";

export default class HeaderAfter extends Component {

    state= {
        user: null,
        loading: false
    }

    componentDidMount() {
        axios.get(`${apiEndpoint}/api/v1/users/profile`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("authToken")}`
            }
        })
            .then(response => {
                this.setState({
                    user: response.data,
                    loading: true
                })
                console.log(this.state.user)
            })
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <Link className="navbar-brand" to="/Home"><img src={Logo} alt="logo" height="30"/></Link>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        My Profile</a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        {
                                            this.state.loading ? <Link className="dropdown-item" to={{
                                                pathname:`/Profile/${this.state.user._id}`
                                            }}>Profile</Link>
                                            : <Link className="dropdown-item" to="/Home">Profile</Link>
                                        }
                                        <Link className="dropdown-item" to="/Logout">Logout</Link>
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
