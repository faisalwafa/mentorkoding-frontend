import React, { Component } from 'react';
import Logo from '../../assets/WebLogo.png';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
    state = {
        username: "",
        password: "",
        name: "",
        email: "",
        address: "",
        phone: "",
        isRedirected: false
    }

    onSubmit = (e) => {
        e.preventDefault();
        axios.post("https://mentor-koding-backend.herokuapp.com/api/v1/users/", {
            username: this.state.username,
            password: this.state.password,
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            phone: this.state.phone,
        })
            .then(response => {
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
                    <div className=" my-5 " style={{
                        width: "40%",
                        margin: "auto"
                    }}>
                        <div className="text-center mb-5" >
                            <img src={Logo} width="120px" />
                        </div>
                        <div className="login-title">
                            <h2 className="text-center">Selamat Datang!</h2>
                            <p className="text-center mb-5">Ayo gabung bersama kami </p>
                        </div>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.onChange}
                                    className="form-control"
                                    placeholder="Username"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                    className="form-control"
                                    placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.onChange}
                                    className="form-control"
                                    placeholder="Nama" />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    className="form-control"
                                    placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="address"
                                    value={this.state.address}
                                    onChange={this.onChange}
                                    className="form-control"
                                    placeholder="Alamat" />
                            </div>
                            <div className="form-group">
                                <input
                                    type="number"
                                    name="phone"
                                    value={this.state.phone}
                                    onChange={this.onChange}
                                    className="form-control"
                                    placeholder="Telepon" />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block" >Submit</button>
                        </form>
                        {this.state.isRedirected && (
                            <Redirect to="/Profile" />
                        )}
                    </div>
                </div>
            </div>
        )
    }
}
