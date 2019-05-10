import React, { Component } from 'react';
// import HeaderHome from "../../layout/HeaderHome";
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import './Login.css'

export default class Login extends Component {
    state = {
        username: "",
        password: "",
        isRedirected: false
    }

    onSubmit = (e) => {
        e.preventDefault();
        axios.post("https://mentor-koding-backend.herokuapp.com/api/v1/users/login", {
            username: this.state.username,
            password: this.state.password
        })
            .then(response => {
                console.log(response)
                localStorage.setItem("authToken", response.data.token)
                this.setState({ username: "", password: "", isRedirected: true })

            })
            .catch(err => this.setState({ username: "", password: "" }))
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div>
                {/* <HeaderHome /> */}
                <div className="container">
                    <div className=" my-5 card w-50 mx-auto">
                        <div className="card-body">
                            <div className="login-title">
                                <h1 className="text-center">Welcome Back</h1>
                                <hr/>
                                <h3 className="text-center mb-5">Meet your Mentor or Student now</h3>
                            </div>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="username"
                                        value={this.state.username}
                                        onChange={this.onChange}
                                        className="form-control form-control-lg"
                                        placeholder="Username"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.onChange}
                                        className="form-control form-control-lg"
                                        placeholder="Password" />
                                </div>
                                <button type="submit" className="btn mt-4 btn-gradient btn-block btn-lg" >Submit</button>
                            </form>
                            <p className="text-center mt-3 login-bottom">Belum punya akun? <Link to="/Register">Daftar disini</Link></p>
                            {this.state.isRedirected && (
                                <Redirect to="/Home" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
