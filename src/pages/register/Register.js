import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';

export default class Login extends Component {
    state = {
        username: "",
        password: "",
        description: "",
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
            description: this.state.description
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
                    <div className=" my-5 card w-50 mx-auto">
                        <div className="card-body">
                            {/* <div className="text-center mb-5" >
                                <img src={Logo} width="120px" />
                            </div> */}
                            <div className="login-title">
                                <h1 className="text-center">Register Form</h1>
                                <hr/>
                                <h3 className="text-center mb-5">Join Us Now!</h3>
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
                                <hr/>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.onChange}
                                        className="form-control form-control-lg"
                                        placeholder="Nama" />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="description"
                                        value={this.state.description}
                                        onChange={this.onChange}
                                        className="form-control form-control-lg"
                                        placeholder="Description" />
                                </div>
                                <hr/>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.onChange}
                                        className="form-control form-control-lg"
                                        placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="address"
                                        value={this.state.address}
                                        onChange={this.onChange}
                                        className="form-control form-control-lg"
                                        placeholder="Alamat" />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="number"
                                        name="phone"
                                        value={this.state.phone}
                                        onChange={this.onChange}
                                        className="form-control form-control-lg"
                                        placeholder="Telepon" />
                                </div>
                                <button type="submit" className="btn btn-block mt-4 btn-lg btn-gradient">Submit</button>
                            </form>
                            <p className="text-center mt-3 login-bottom">Sudah punya akun? <Link to="/Login">Login disini</Link></p>
                            {this.state.isRedirected && (
                                <Redirect to="/Profile" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
